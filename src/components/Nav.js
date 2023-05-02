import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Nav() {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}><Text>Sign In</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Connect")}><Text>Connect</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Control")}><Text>Control</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Form")}><Text>Form</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Nav;