import React, { useState, useEffect, useReducer } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import {
    BleManager,
    Device,
    Service,
    Characteristic,
    Descriptor
} from 'react-native-ble-plx';
import connectStyle from '../styles/connectStyle';
import { Base64 } from '../lib/base64';
import { Buffer } from 'buffer';

function Connect() {
    const manager = new BleManager();
      
    const reducer = (
        state: Device[],
        action: { type: 'ADD_DEVICE', payload: Device } | { type: 'CLEAR' }
    ) => {
        switch (action.type) {
            case 'ADD_DEVICE':
                const { payload: device } = action;

                if (device && !state.find((dev) => dev.id === device.id)) {
                    return [...state, device];
                }
                return state;
            case 'CLEAR':
                return [];
            default:
                return state;
        }
    };
    
    const [scannedDevices, dispatch] = useReducer(reducer, []);
    
    const [isLoading, setIsLoading] = useState(false);

    const [bluetoothStatus, setBluetoothStatus] = useState(false);
    
    const enableBluetooth = () => {
        manager.enable().then(() => {
            Alert.alert("Bluetooth is on.");
            setBluetoothStatus(true);
        }).catch((error) => {
            console.warn(error);
        });
    };

    const disableBluetooth = () => {
        manager.disable().then(() => {
            Alert.alert("Bluetooth is off.");
            setBluetoothStatus(false);
        }).catch((error) => {
            console.warn(error);
        });
    };

    const toggleBluetooth = () => {
        if (bluetoothStatus) {
            disableBluetooth();
        } else {
            enableBluetooth();
        }
    };

    const scanDevices = () => {
        setIsLoading(true);
        
        manager.startDeviceScan(null, null, (error, scannedDevice) => {
          if (error) console.warn(error);

          if (scannedDevice) dispatch({type: 'ADD_DEVICE', payload: scannedDevice});

          setTimeout(() => {
            manager.stopDeviceScan();
            setIsLoading(false);
          }, 5000);
        });
    };

    const connectDevice = () => {
        manager.connectToDevice("ED:87:78:A6:04:28").then((device) => {
            device.isConnected().then((flag) => {
                Alert.alert("connection: " + flag);

                if (flag) {
                    device.discoverAllServicesAndCharacteristics().then((device) => {
                        Alert.alert("All services and characteristics were discovered from the device.");
                    }).catch((error) => {
                        console.warn(error);
                    });
                }
            }).catch((error) => {
                console.warn(error);
            });
        }).catch((error) => {
            console.warn(error);
        });
    };

    const disconnectDevice = () => {
        manager.cancelDeviceConnection("ED:87:78:A6:04:28").then(() => {
            Alert.alert("Connection from the device was canceled.")
        }).catch((error) => {
            console.warn(error);
        });
    };

    return (
        <View style={connectStyle.mainBox}>
            <View style={connectStyle.contentBox}>
                <TouchableOpacity style={connectStyle.controlBtn} onPress={toggleBluetooth}><Text>Turn On/Off Bluetooth</Text></TouchableOpacity>
                <TouchableOpacity style={connectStyle.controlBtn} onPress={scanDevices}><Text>Scan Devices</Text></TouchableOpacity>
                <View>
                    <View style={connectStyle.infoBox}>
                        <Text>Serial Number: R3CTA0L88KA</Text>
                        <Text>Device ID: ED:87:78:A6:04:28</Text>
                        <Text>Service UUID: 0x181F</Text>
                        <Text>Characteristic1 UUID: 0x2A1A</Text>
                        <Text>Characteristic2 UUID: 0x2A1B</Text>
                        <Text>Characteristic3 UUID: 0x2A1C</Text>
                        <Text>Characteristic4 UUID: 0x2A1D</Text>
                    </View>
                    <View style={connectStyle.connectBtnBox}>
                        <TouchableOpacity style={connectStyle.connectBtn} onPress={connectDevice}><Text>Connect</Text></TouchableOpacity>
                        <TouchableOpacity style={connectStyle.connectBtn} onPress={disconnectDevice}><Text>Disconnect</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Connect;