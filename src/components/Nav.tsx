import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navStyle from '../styles/navStyle';
import SignIn from './Home';
import Connect from './Connect';
import Control from './Control';
import Form from './Form';

function Nav() {
    const navigation = useNavigation();

    return (
        <View style={navStyle.navBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Home" as never)} style={navStyle.navBtn}><Text style={navStyle.navBtnText}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Connect" as never)} style={navStyle.navBtn}><Text style={navStyle.navBtnText}>Connect</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Control" as never)} style={navStyle.navBtn}><Text style={navStyle.navBtnText}>Control</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Form" as never)} style={[navStyle.navBtn, navStyle.lastNavBtn]}><Text style={navStyle.navBtnText}>Form</Text></TouchableOpacity>
        </View>
    );
}

export default Nav;