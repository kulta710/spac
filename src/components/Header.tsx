import React from 'react';
import { View, Text, Image } from 'react-native';
import headerStyle from '../styles/headerStyle';

function Header() {
    return (
        <View style={headerStyle.headerBox}>
            {/* <Text style={headerStyle.title}>SPAC</Text> */}
            <Image source={require('spac/android/app/src/main/assets/spac-title.png')} style={headerStyle.title} resizeMode="contain" />
            <Text style={headerStyle.subTitle}>Self-directed Personalized Adjustable Cart</Text>
        </View>
    );
}

export default Header;