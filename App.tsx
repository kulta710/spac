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

import Header from './src/components/Header';
import Nav from './src/components/Nav';
import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Connect from './src/components/Connect';
import Control from './src/components/Control';
import Form from './src/components/Form';
import Footer from './src/components/Footer';

import mainStyle from './src/styles/mainStyle';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={mainStyle.container}>
        <Header></Header>
        <Nav></Nav>
        <View style={mainStyle.mainBox}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Connect" component={Connect} />
            <Stack.Screen name="Control" component={Control} />
            <Stack.Screen name="Form" component={Form} />
          </Stack.Navigator>
        </View>
        <Footer></Footer>
      </SafeAreaView>
      </NavigationContainer>
  );
}