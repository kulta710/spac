import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import signInStyle from '../styles/signInStyle';

function SignIn() {
    return (
        <View style={signInStyle.navBox}>
            <View style={signInStyle.loginBox}>
                <View>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
                <TouchableOpacity><Text>Log In</Text></TouchableOpacity>
            </View>
            <View style={signInStyle.controlBox}>
                <TouchableOpacity><Text>Find ID/PW</Text></TouchableOpacity>
                <TouchableOpacity><Text>Sing Up</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default SignIn;