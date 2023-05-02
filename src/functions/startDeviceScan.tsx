import React, { useState, useEffect, useReducer } from 'react';
import { Alert } from 'react-native';

import {
    BleManager,
    Device,
    Service,
    Characteristic,
    Descriptor
} from 'react-native-ble-plx';

import { Base64 } from '../lib/base64';
import { Buffer } from 'buffer';

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

export default scanDevices;