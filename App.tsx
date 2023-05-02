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

import Header from './src/components/Header';
import Nav from './src/components/Nav';
import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Connect from './src/components/Connect';
import Control from './src/components/Control';
import Form from './src/components/Form';
import Footer from './src/components/Footer';

function forward() {
  Alert.alert("Forward!");
}

function left() {
  Alert.alert("Left!");
}

function right() {
  Alert.alert("Right!");
}

function back() {
  Alert.alert("Back!");
}

function stop() {
  Alert.alert("Stop!");
}

function autoFollowing() {
  Alert.alert("Auto-following!");
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header></Header>
        <Nav></Nav>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Connect" component={Connect} />
          <Stack.Screen name="Control" component={Control} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
        <Footer></Footer>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  "container": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  "main": {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  "controller": {
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
    backgroundColor: "lightgray"
  },
  "buttonRow": {
    display: "flex",
    flexDirection: "row",

  },
  "button": {
    borderWidth: 1,
    width: 80,
    height: 80,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  "pseudoButton": {
    borderWidth: 0,
    width: 80,
    height: 80,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  "font30": {
    fontSize: 18
  },
  "buttonStyle": {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15
  },
  "buttonTextStyle": {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16
  }
});