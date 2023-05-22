import React, { useState, useEffect, useMemo } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { BleManager, Device, Service, Characteristic, Descriptor } from 'react-native-ble-plx';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, runOnJS } from 'react-native-reanimated';
import controlStyle from '../styles/controlStyle';
import { Base64 } from '../lib/base64';
import { Buffer } from 'buffer';

function Control() {
    const manager = new BleManager();

    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState(0);
    const [isWritingRemote, setIsWritingRemote] = useState(false);
    const [alarmOn, setAlarmOn] = useState(false);
    const [lightOn, setLightOn] = useState(false);
    const [autoFollowingOn, setAutoFollowingOn] = useState(false);
    const [remoteControlOn, setRemoteControlOn] = useState(false);
    const [emergencyStopOn, setEmergencyStopOn] = useState(false);
    const [distance, setDistance] = useState("none");
    const [angle, setAngle] = useState("none");
    const [connectionStatus, setConnectionStatus] = useState(false);
    const [isReadingStatus, setIsReadingStatus] = useState(false);
    const [timer, setTimer] = useState(0);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const context = useSharedValue({x: 0, y: 0});

    const radiusLimit = 65;

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1);
        }, 1000);

        manager.readCharacteristicForDevice("ED:87:78:A6:04:28", "0000181f-0000-1000-8000-00805f9b34fb", "00002a1b-0000-1000-8000-00805f9b34fb").then((char) => {
            let response = Base64.decode(char.value);

            setDistance(response.substring(0, 3));
            setAngle(response.substring(4, 8));
        }).catch((error) => {
            console.warn(error);
        });

        manager.isDeviceConnected("ED:87:78:A6:04:28").then((flag) => {
            if (flag) setConnectionStatus(true);
            else setConnectionStatus(false);
        });
    }, [timer]);

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { x: translateX.value, y: translateY.value};
    }).onUpdate((event) => {
        let radius = Math.sqrt(Math.pow(translateX.value, 2) + Math.pow(translateY.value, 2));

        if (radius <= radiusLimit) {
            translateX.value = event.translationX + context.value.x;
            translateY.value = event.translationY + context.value.y;
        } else if (translateX.value*event.translationX < 0) {
            translateX.value = event.translationX + context.value.x;
        } else if (translateY.value*event.translationY < 0) {
            translateY.value = event.translationY + context.value.y;
        }

        runOnJS(setCoordX)(translateX.value);
        runOnJS(setCoordY)(translateY.value);

        if (!isWritingRemote && remoteControlOn) {
            setIsWritingRemote(true);

            let ratioX = Math.abs(coordX)/radiusLimit;
            let ratioY = Math.abs(coordY)/radiusLimit;
            if (ratioX > 1) ratioX = 1;
            if (coordY > 1) ratioY = 1;
            let ratioR = Math.trunc(Math.sqrt(Math.pow(ratioX, 2) + Math.pow(ratioY, 2))*100);

            let theta = 0;
            if (coordX >= 0 && coordY < 0) theta = Math.trunc(-(Math.atan(coordX/coordY)*(180/Math.PI)));
            else if (coordX > 0 && coordY > 0) theta = Math.trunc(180 - (Math.atan(coordX/coordY)*(180/Math.PI)));
            else if (coordX < 0 && coordY < 0) theta = Math.trunc(-(Math.atan(coordX/coordY)*(180/Math.PI)));
            else if (coordX < 0 && coordY > 0) theta = Math.trunc(180 + (Math.atan(coordX/coordY)*(180/Math.PI)));
            else if (coordX == 0 && coordY < 0) theta = 0;
            else if (coordX == 0 && coordY > 0) theta = 180;
            else if (coordY == 0 && coordX > 0) theta = 90;
            else if (coordY == 0 && coordX < 0) theta = -90;

            let rString = "";
            if (ratioR < 10) rString = "00" + ratioR;
            else if (ratioR < 100) rString = "0" + ratioR;
            else rString = "" + ratioR;

            let thetaString = "";
            if (theta >= 0) {
                thetaString += "+";
                if (theta < 10) thetaString += "00" + theta;
                else if (theta < 100) thetaString += "0" + theta;
                else thetaString += theta;
            } else {
                thetaString += "-";
                if (Math.abs(theta) < 10) thetaString += "00" + Math.abs(theta);
                else if (Math.abs(theta) < 100) thetaString += "0" + Math.abs(theta);
                else thetaString += Math.abs(theta);
            }

            let remoteString = "" + rString + "/" + thetaString;
            manager.writeCharacteristicWithoutResponseForDevice("ED:87:78:A6:04:28", "0000181f-0000-1000-8000-00805f9b34fb", "00002a1a-0000-1000-8000-00805f9b34fb", Base64.encode(remoteString)).then(() => {
                setIsWritingRemote(false);
            }).catch((error) => {
                console.warn(error);
            });
        }
    }).onEnd(() => {
        translateX.value = 0; translateY.value = 0;
        runOnJS(setCoordX)(0);
        runOnJS(setCoordY)(0);

        if (remoteControlOn) {
            manager.writeCharacteristicWithoutResponseForDevice("ED:87:78:A6:04:28", "0000181f-0000-1000-8000-00805f9b34fb", "00002a1a-0000-1000-8000-00805f9b34fb", Base64.encode("000/+000")).catch((error) => {
                console.warn(error);
            });
        }
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
        }
    });

    const toggleAlarm = () => {
        if (alarmOn) setAlarmOn(false);
        else setAlarmOn(true);
        writeCharacteristic3();
    };
    
    const toggleLight = () => {
        if (lightOn) setLightOn(false);
        else setLightOn(true);

        writeCharacteristic3();
    };

    const toggleAutoFollowing = () => {
        if (autoFollowingOn) setAutoFollowingOn(false);
        else {
            setAutoFollowingOn(true);
            setEmergencyStopOn(false);
            setRemoteControlOn(false);
        }

        writeCharacteristic3();
    };

    const toggleRemoteControl = () => {
        if (remoteControlOn) setRemoteControlOn(false);
        else {
            setRemoteControlOn(true);
            setEmergencyStopOn(false);
            setAutoFollowingOn(false);
        }
        writeCharacteristic3();
    }

    const toggleEmergencyStop = () => {
        if (emergencyStopOn) setEmergencyStopOn(false);
        else {
            setEmergencyStopOn(true);
            setAutoFollowingOn(false);
            setRemoteControlOn(false);
        }

        writeCharacteristic3();
    };

    const writeCharacteristic3 = () => {
        let toggleString = (autoFollowingOn ? "1" : "0") + "/" + (remoteControlOn ? "1" : "0") + "/" + (emergencyStopOn ? "1" : "0") + "/" + (alarmOn ? "1" : "0") + "/" + (lightOn ? "1" : "0");

        manager.writeCharacteristicWithoutResponseForDevice("", "", "", Base64.encode(toggleString)).catch((error) => {
            console.warn(error);
        });
    }

    return (
        <View style={controlStyle.mainBox}>
            <View style={controlStyle.statusBox}>
                <Text>Status</Text>
                <Text>Distance: {distance}(cm), Angle: {angle}(degrees) from User</Text>
                <Text>Connection: {connectionStatus}</Text>
                <Text>Translate-X: {coordX/radiusLimit > 1 ? 100 : Math.trunc(coordX/radiusLimit*100)}(%), Translate-Y: {coordY/radiusLimit > 1 ? 100 : Math.trunc(coordY/radiusLimit*100)}(%)</Text>
            </View>
            <View style={controlStyle.peripheralFnBox}>
                <TouchableOpacity style={controlStyle.peripheralFnBtn} onPress={toggleAlarm}><Text>Alarm</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.peripheralFnBtn} onPress={toggleLight}><Text>Light</Text></TouchableOpacity>
            </View>
            <View style={controlStyle.controlBox}>
                <View style={controlStyle.controllerBoundary}>
                    <GestureDetector gesture={gesture}>
                        <Animated.View style={[controlStyle.controller, rStyle]} />
                    </GestureDetector>
                </View>
            </View>
            <View style={controlStyle.mainFnBox}>
                <TouchableOpacity style={controlStyle.mainFnBtn} onPress={toggleAutoFollowing}><Text>Auto Following</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.mainFnBtn} onPress={toggleRemoteControl}><Text>Remote Control</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.mainFnBtn} onPress={toggleEmergencyStop}><Text>Emergency Stop</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Control;