import React, { useState, useEffect, useMemo } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, runOnJS } from 'react-native-reanimated';

import controlStyle from '../styles/controlStyle';

function Control() {
    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState(0);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const context = useSharedValue({x: 0, y: 0});

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { x: translateX.value, y: translateY.value};
    }).onUpdate((event) => {
        let radiusLimit = 65;
        let radius = Math.sqrt(Math.pow(translateX.value, 2) + Math.pow(translateY.value, 2));
        console.log(radius);

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
    }).onEnd(() => {
        translateX.value = 0; translateY.value = 0;
        runOnJS(setCoordX)(0);
        runOnJS(setCoordY)(0);
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
        }
    });

    return (
        <View style={controlStyle.mainBox}>
            <View style={controlStyle.statusBox}>
                <Text>Status</Text>
                <Text>Distance: 5.2(m), Angle: 5(degrees) from User</Text>
                <Text>Connection: OK</Text>
                <Text>x: {coordX}, y: {coordY}</Text>
            </View>
            <View style={controlStyle.peripheralFnBox}>
                <TouchableOpacity style={controlStyle.peripheralFnBtn}><Text>Alarm</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.peripheralFnBtn}><Text>Light</Text></TouchableOpacity>
            </View>
            <View style={controlStyle.controlBox}>
                <View style={controlStyle.controllerBoundary}>
                    <GestureDetector gesture={gesture}>
                        <Animated.View style={[controlStyle.controller, rStyle]} />
                    </GestureDetector>
                </View>
            </View>
            <View style={controlStyle.mainFnBox}>
                <TouchableOpacity style={controlStyle.mainFnBtn}><Text>Auto Following</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.mainFnBtn}><Text>Emergency Stop</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Control;