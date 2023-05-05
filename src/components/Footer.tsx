import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import footerStyle from '../styles/footerStyle';

function Footer() {
    return (
        <View style={footerStyle.footerBox}>
            <Text style={footerStyle.footerText}>소속: 연세대학교 기계공학부, 창의제품설계 1분반 1조</Text>
            <Text style={footerStyle.footerText}>팀원: 김홍민, 김기영, 김용진, 모하메드, 이동현, 함영식</Text>
            <Text style={footerStyle.footerText}>주소: 서울특별시 서대문구 연세로50 제1공학관 A283</Text>
            <Text style={footerStyle.footerText}>연락처: 010-4645-8986</Text>
        </View>
    );
}

export default Footer;