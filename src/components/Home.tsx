import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './Form';

function Home() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [permission, setPermission] = useState(false);

    const logIn = () => {
        if (id === "yonsei" && password === "1234") {
            setPermission(true);
        }
    }

    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        if (!permission) {
            navigation.navigate("SignedIn" as never);
        } else {
            navigation.navigate("SignedOut" as never);
        }
    }, []);

    return (
        <View style={homeStyle.mainBox}>
            <View style={homeStyle.welcomeBox}>
                <Text style={homeStyle.welcome}>Welcome!</Text>
                <Text style={homeStyle.welcomeText}>Please sign in and control the spac cart on your own.</Text>
            </View>
            {permission ? <SignedIn></SignedIn> : <SignedOut></SignedOut>}
            {/* <Stack.Navigator screenOptions={{headerShown: false, animationTypeForReplace: "push", animation: "slide_from_right"}} initialRouteName="SignedOut">
                <Stack.Screen name="SignedOut">
                    {(props) => <SignedOut {...props} setId={setId} setPassword={setPassword} setPermission={setPermission} logIn={logIn} />}
                </Stack.Screen>
                <Stack.Screen name="SignedIn" component={SignedIn} />
            </Stack.Navigator> */}
            {/* <Stack.Navigator> */}
                
                {/* <Stack.Screen name="SignedIn" component={Form}></Stack.Screen> */}
                {/* <Stack.Screen name="SignedOut" component={SignedOut}></Stack.Screen> */}
            {/* </Stack.Navigator> */}
            
            <View style={homeStyle.aboutTeamBox}>
                <Text style={homeStyle.aboutTeamTitle}>About Our Team</Text>
                <Text style={homeStyle.aboutTeamText}>소속: 연세대학교 기계공학부, 창의제품설계 1분반 1조</Text>
                <Text style={homeStyle.aboutTeamText}>팀원: 김홍민, 김기영, 김용진, 모하메드, 이동현, 함영식</Text>
                <Text style={homeStyle.aboutTeamText}>주소: 서울특별시 서대문구 연세로50 제1공학관 A283</Text>
                <Text style={homeStyle.aboutTeamText}>연락처: 010-4645-8986</Text>
            </View>
        </View>
    );
}

const SignedOut = (props:any) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [permission, setPermission] = useState(false);

    const logIn = () => {
        if (id === "yonsei" && password === "1234") {
            setPermission(true);
        }
    }

    props.setId = setId;
    props.setPassword = setPassword;
    props.setPermission = setPermission;
    props.logIn = logIn;

    return (
        <View style={homeStyle.contentBox}>
            <View style={homeStyle.loginBox}>
                <View>
                    <TextInput placeholder="ID" style={homeStyle.textInput} onChangeText={(newText) => {setId(newText);}}></TextInput>
                    <TextInput secureTextEntry={true} placeholder="Password" style={homeStyle.textInput} onChangeText={(newText) => {setPassword(newText);}}></TextInput>
                </View>
                <TouchableOpacity style={homeStyle.loginBoxBtn} onPress={logIn}><Text>Log In</Text></TouchableOpacity>
            </View>
            <View style={homeStyle.controlBox}>
                <TouchableOpacity style={homeStyle.controlBoxBtn}><Text>Find ID/PW</Text></TouchableOpacity>
                <TouchableOpacity style={homeStyle.controlBoxBtn}><Text>Sing Up</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const SignedIn = () => {
    return (
        <Text>Welcome!</Text>
    );
}

export default Home;