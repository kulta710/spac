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

import { Base64 } from './base64';

import { Buffer } from 'buffer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const manager = new BleManager();

const reducer = (
  state: Device[],
  action: { type: 'ADD_DEVICE', payload: Device } | { type: 'CLEAR' }
) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      const { payload: device } = action;

      // check if the detected device is not already added to the list
      if (device && !state.find((dev) => dev.id === device.id)) {
        return [...state, device];
      }
      return state;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export default function App() {
  // reducer to store and display detected ble devices
  const [scannedDevices, dispatch] = useReducer(reducer, []);

  // state to give the user a feedback about the manager scanning devices
  const [isLoading, setIsLoading] = useState(false);

  const scanDevices = () => {
    // display the Activityindicator
    setIsLoading(true);

    let connectedDevice;

    // scan devices
    manager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }

      // if a device is detected add the device to the list by dispatching the action into the reducer
      if (scannedDevice) {
        dispatch({type: 'ADD_DEVICE', payload: scannedDevice});
      }

      // stop scanning devices after 5 seconds
      setTimeout(() => {
        manager.stopDeviceScan();
        setIsLoading(false);
      }, 5000);
    })

    for (let i = 0; i < scannedDevices.length; i++) {
      if (scannedDevices[i].id === "00:18:31:EF:C9:CE") {
        scannedDevices[i].connect().then((device) => {
          return device.discoverAllServicesAndCharacteristics();
        }).then((device) => {
          device.isConnected().then((flag) => {
            Alert.alert("" + device.id + ", " + flag);
          });

          device.services().then((arr) => {
            for (let j = 0; j < arr.length; j++) {
              Alert.alert("s" + arr[j].id + ": " + arr[j].uuid);

              arr[j].characteristics().then((arr) => {
                for (let k = 0; k < arr.length; k++) {
                  Alert.alert("c" + arr[k].id + ": " + arr[k].uuid);

                  Alert.alert("c-writable: " + arr[k].isWritableWithResponse);

                  let formatValue = new Buffer('7', 'base64').toString('ascii');  

                  arr[k].writeWithResponse(formatValue).then(() => {
                    Alert.alert("Success");
                  });

                  Alert.alert("c-value: " + Base64.decode(arr[k].value));
                  
                  // arr[k].descriptors().then((arr) => {
                  //   for (let l = 0; l < arr.length; l++) {
                  //     arr[l].write(Base64.encode("7"));

                  //     Alert.alert("d" + arr[l].id + ": " + Base64.decode(arr[l].value));
                  //   }
                  // });
                }
              });
            }
          });

          // if (device.serviceUUIDs !== null) {
          //   for (let j = 0; j < device.serviceUUIDs.length; j++) {
          //     Alert.alert(device.serviceUUIDs[j]);
          //   }
          // }

          device.writeCharacteristicWithoutResponseForService("0xFFE0", "0xFFE1",Base64.encode('power'));
         
          //Alert.alert("" + device.name);
          //Alert.alert("" + device.rssi);
          //Alert.alert("" + device.manufacturerData);
          //Alert.alert("" + device.serviceData);
          //Alert.alert("" + device.serviceUUIDs);
        });
      }
    }

    Alert.alert("scannedDevice: " + scannedDevices.length);
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={} />
      </Stack.Navigator>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SPAC</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} onPress={scanDevices}>
              <Text style={styles.buttonTextStyle}>Scan Bluetooth Devices</Text>
          </TouchableOpacity>

          <View></View>

          {/* <View style={styles.buttonRow}>
            <View style={styles.pseudoButton}></View>
            <TouchableOpacity style={styles.button} onPress={forward}>
              <Text style={styles.font30}>Forward</Text>
            </TouchableOpacity>
            <View style={styles.pseudoButton}></View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={left}><Text style={styles.font30}>Left</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={stop}><Text style={styles.font30}>Stop</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={right}><Text style={styles.font30}>Right</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.pseudoButton}></View>
            <TouchableOpacity style={styles.button} onPress={back}><Text style={styles.font30}>Back</Text></TouchableOpacity>
            <View style={styles.pseudoButton}></View>
          </View>
          <TouchableOpacity style={styles.controller} onPress={autoFollowing}><Text style={styles.font30}>Auto-following</Text></TouchableOpacity> */}
        </View>
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
  "title": {
    fontWeight: "bold",
    fontSize: 30
  },
  "header": {
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: 60
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