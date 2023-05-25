import React, { useState, useEffect, useReducer } from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  NativeModules,
  useColorScheme,
  TouchableOpacity,
  NativeEventEmitter,
  PermissionsAndroid
} from 'react-native';
import {
  BleManager,
  Device,
  Characteristic,
  Service,
  Descriptor
} from 'react-native-ble-plx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import Home from './src/components/Home';
import Connect from './src/components/Connect';
import Control from './src/components/Control';
import Form from './src/components/Form';
import mainStyle from './src/styles/mainStyle';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

export default function App() {
    LogBox.ignoreLogs(['new NativeEventEmitter']);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }, []);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <GestureHandlerRootView>
                <SafeAreaView style={mainStyle.container}>
                    <Header></Header>
                    <View style={mainStyle.gradBand}>
                        <View style={mainStyle.gradLevel3}></View>
                        <View style={mainStyle.gradLevel2}></View>
                        <View style={mainStyle.gradLevel1}></View>
                    </View>
                    <Stack.Navigator screenOptions={{headerShown: false, animationTypeForReplace: "push", animation: "slide_from_right"}} initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Connect" component={Connect} />
                        <Stack.Screen name="Control" component={Control} />
                        <Stack.Screen name="Form" component={Form} />
                    </Stack.Navigator>
                    <View style={mainStyle.gradBand}>
                        <View style={mainStyle.gradLevel1}></View>
                        <View style={mainStyle.gradLevel2}></View>
                        <View style={mainStyle.gradLevel3}></View>
                    </View>
                    <Nav></Nav>
                </SafeAreaView>
            </GestureHandlerRootView>
        </NavigationContainer>
    );
}