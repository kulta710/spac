import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import controlStyle from '../styles/controlStyle';

function Control() {
    return (
        <View style={controlStyle.mainBox}>
            <View style={controlStyle.statusBox}>
                <Text>Status</Text>
                <Text>Distance: 5.2(m), Angle: 5(degrees) from User</Text>
                <Text>Connection: OK</Text>
            </View>
            <View style={controlStyle.peripheralFnBox}>
                <TouchableOpacity style={controlStyle.peripheralFnBtn}><Text>Alarm</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.peripheralFnBtn}><Text>Light</Text></TouchableOpacity>
            </View>
            <View style={controlStyle.controlBox}>
                <Text>JoyStick</Text>
            </View>
            <View style={controlStyle.mainFnBox}>
                <TouchableOpacity style={controlStyle.mainFnBtn}><Text>Auto Following</Text></TouchableOpacity>
                <TouchableOpacity style={controlStyle.mainFnBtn}><Text>Emergency Stop</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Control;