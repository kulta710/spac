import React, { useState, useEffect, useReducer } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import connectStyle from '../styles/connectStyle';

function Connect() {
    return (
        <View style={connectStyle.mainBox}>
            <View style={connectStyle.contentBox}>
                <TouchableOpacity style={connectStyle.controlBtn}><Text>Turn On/Off Bluetooth</Text></TouchableOpacity>
                <TouchableOpacity style={connectStyle.controlBtn}><Text>Scan Devices</Text></TouchableOpacity>
                <View>
                    <View style={connectStyle.infoBox}>
                        <Text>Serial Number: R3CTA0L88KA</Text>
                        <Text>Device UUID: 00:18:31:EF:C9:CE</Text>
                        <Text>Service UUID: 0xFFE0</Text>
                        <Text>Charateristic1 UUID: 0xFFE1</Text>
                        <Text>Charateristic2 UUID: 0xFFE2</Text>
                        <Text>Charateristic3 UUID: 0xFFE3</Text>
                    </View>
                    <View style={connectStyle.connectBtnBox}>
                        <TouchableOpacity style={connectStyle.connectBtn}><Text>Connect</Text></TouchableOpacity>
                        <TouchableOpacity style={connectStyle.connectBtn}><Text>Disconnect</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Connect;