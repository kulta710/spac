import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import headerStyle from '../styles/headerStyle';

function Header() {
    return (
        <View style={headerStyle.headerBox}>
            <Text style={headerStyle.title}>SPAC</Text>
            <Text style={headerStyle.subTitle}>Self-directed Personalized Adjustable Cart</Text>
        </View>
    );
}

export default Header;