import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import signInStyle from '../styles/signInStyle';

function SignIn() {
    return (
        <View style={signInStyle.mainBox}>
            <View style={signInStyle.contentBox}>
                <View style={signInStyle.loginBox}>
                    <View>
                        <TextInput placeholder="ID" style={signInStyle.textInput}></TextInput>
                        <TextInput placeholder="Password" style={signInStyle.textInput}></TextInput>
                    </View>
                    <TouchableOpacity style={signInStyle.loginBoxBtn}><Text>Log In</Text></TouchableOpacity>
                </View>
                <View style={signInStyle.controlBox}>
                    <TouchableOpacity style={signInStyle.controlBoxBtn}><Text>Find ID/PW</Text></TouchableOpacity>
                    <TouchableOpacity style={signInStyle.controlBoxBtn}><Text>Sing Up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignIn;