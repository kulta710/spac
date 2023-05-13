import React, { useState, useEffect, useReducer } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import connectStyle from '../styles/connectStyle';

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

function Connect() {
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

    const [status, setStatus] = useState("");
    
    const scanDevices = () => {   
        // display the Activityindicator
        setIsLoading(true);
        
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
      }

      const scanChar = () => {
        let connectedDevice;

        manager.connectToDevice("ED:87:78:A6:04:28").then((device) => {
            device.isConnected().then((flag) => {
                Alert.alert("connection: " + flag);
            });

            device.discoverAllServicesAndCharacteristics().then((device) => {
                device.services().then((services) => {
                    for (let i = 0; i < services.length; i++) {
                        if (services[i].uuid == "0000181f-0000-1000-8000-00805f9b34fb") {
                            services[i].characteristics().then((characteristics) => {
                                for (let j = 0; j < characteristics.length; j++) {
                                    if (characteristics[j].uuid == "00002a1b-0000-1000-8000-00805f9b34fb") {                                        
                                        characteristics[j].writeWithoutResponse(Base64.encode('1'));
                                    }
                                }
                            }).catch((error) => {
                                Alert.alert(error.message);
                            });
                        }
                    }
                }).catch((error) => {
                    Alert.alert(error.message);
                });
            }).catch((error) => {
                Alert.alert(error.message);
            });
            // "6e400001-b5a3-f393-e0a9-e50e24dcca9e"
            // "00002a1b-0000-1000-8000-00805f9b34fb"
            // manager.readCharacteristicForDevice("ED:87:78:A6:04:28", "181F", "2A1B").then((characteristic) => {
            //     Alert.alert(characteristic.uuid);
            // }).catch((error) => {
            //     setStatus(error.message);
            // });

            // device.services().then((arr) => {
            //     for (let j = 0; j < arr.length; j++) {
            //       //Alert.alert("s" + arr[j].id + ": " + arr[j].uuid);
            //       setStatus(status + "s" + arr[j].id + ": " + arr[j].uuid + "/");
      
            //       arr[j].characteristics().then((arr) => {
            //         for (let k = 0; k < arr.length; k++) {
            //           //Alert.alert("c" + arr[k].id + ": " + arr[k].uuid);
      
            //           //Alert.alert("c-writable: " + arr[k].isWritableWithResponse);
      
            //           let formatValue = new Buffer('7', 'base64').toString('ascii');  
      
            //           arr[k].writeWithResponse(formatValue).then(() => {
            //             //Alert.alert("Success");
            //           });
      
            //           //Alert.alert("c-value: " + Base64.decode(arr[k].value));
                      
            //           // arr[k].descriptors().then((arr) => {
            //           //   for (let l = 0; l < arr.length; l++) {
            //           //     arr[l].write(Base64.encode("7"));
      
            //           //     Alert.alert("d" + arr[l].id + ": " + Base64.decode(arr[l].value));
            //           //   }
            //           // });
            //         }
            //       });
            //     }
            // }).catch((error) => {
            //     Alert.alert(error.message);
            // });

            // manager.servicesForDevice("ED:87:78:A6:04:28").then((arr) => {
            //     for (let j = 0; j < arr.length; j++) {
            //         Alert.alert("s" + arr[j].id + ": " + arr[j].uuid);
            //     }
            // }).catch((error) => {
            //     Alert.alert(error.message);
            // });
        }).catch((error) => {
            Alert.alert(error.message);
        });
      }

        // for (let i = 0; i < scannedDevices.length; i++) {
        //     if (scannedDevices[i].id == "ED:87:78:A6:04:28") {
        //       Alert.alert(scannedDevices[i].id);
        //       //setStatus(status + scannedDevices[i].id + "/");
        //       scannedDevices[i].connect().then((device) => {
        //         Alert.alert("connect: " + device.id);

        //         device.isConnected().then((flag) => {
        //             Alert.alert("" + device.id + ", " + flag);
        //             //setStatus(status + flag + "/");
        //           });
          
                //   device.services().then((arr) => {
                //     for (let j = 0; j < arr.length; j++) {
                //       //Alert.alert("s" + arr[j].id + ": " + arr[j].uuid);
                //       setStatus(status + "s" + arr[j].id + ": " + arr[j].uuid + "/");
          
                //       arr[j].characteristics().then((arr) => {
                //         for (let k = 0; k < arr.length; k++) {
                //           //Alert.alert("c" + arr[k].id + ": " + arr[k].uuid);
          
                //           //Alert.alert("c-writable: " + arr[k].isWritableWithResponse);
          
                //           let formatValue = new Buffer('7', 'base64').toString('ascii');  
          
                //           arr[k].writeWithResponse(formatValue).then(() => {
                //             //Alert.alert("Success");
                //           });
          
                //           //Alert.alert("c-value: " + Base64.decode(arr[k].value));
                          
                //           // arr[k].descriptors().then((arr) => {
                //           //   for (let l = 0; l < arr.length; l++) {
                //           //     arr[l].write(Base64.encode("7"));
          
                //           //     Alert.alert("d" + arr[l].id + ": " + Base64.decode(arr[l].value));
                //           //   }
                //           // });
                //         }
                //       });
                //     }
                //   });
                
                //return device.discoverAllServicesAndCharacteristics();
            //   });
            //   .then((device) => {
            //     device.isConnected().then((flag) => {
            //       Alert.alert("" + device.id + ", " + flag);
            //       setStatus(status + flag + "/");
            //     });
        
            //     device.services().then((arr) => {
            //       for (let j = 0; j < arr.length; j++) {
            //         //Alert.alert("s" + arr[j].id + ": " + arr[j].uuid);
            //         setStatus(status + "s" + arr[j].id + ": " + arr[j].uuid + "/");
        
            //         arr[j].characteristics().then((arr) => {
            //           for (let k = 0; k < arr.length; k++) {
            //             //Alert.alert("c" + arr[k].id + ": " + arr[k].uuid);
        
            //             //Alert.alert("c-writable: " + arr[k].isWritableWithResponse);
        
            //             let formatValue = new Buffer('7', 'base64').toString('ascii');  
        
            //             arr[k].writeWithResponse(formatValue).then(() => {
            //               //Alert.alert("Success");
            //             });
        
            //             //Alert.alert("c-value: " + Base64.decode(arr[k].value));
                        
            //             // arr[k].descriptors().then((arr) => {
            //             //   for (let l = 0; l < arr.length; l++) {
            //             //     arr[l].write(Base64.encode("7"));
        
            //             //     Alert.alert("d" + arr[l].id + ": " + Base64.decode(arr[l].value));
            //             //   }
            //             // });
            //           }
            //         });
            //       }
            //     });
        
                // if (device.serviceUUIDs !== null) {
                //   for (let j = 0; j < device.serviceUUIDs.length; j++) {
                //     Alert.alert(device.serviceUUIDs[j]);
                //   }
                // }
        
                //device.writeCharacteristicWithoutResponseForService("0xFFE0", "0xFFE1",Base64.encode('power'));
               
                //Alert.alert("" + device.name);
                //Alert.alert("" + device.rssi);
                //Alert.alert("" + device.manufacturerData);
                //Alert.alert("" + device.serviceData);
                //Alert.alert("" + device.serviceUUIDs);
              //});
            
        //   }
        //Alert.alert("scannedDevice: " + scannedDevices.length);

    return (
        <View style={connectStyle.mainBox}>
            <View style={connectStyle.contentBox}>
                <TouchableOpacity style={connectStyle.controlBtn} onPress={scanChar}><Text>Turn On/Off Bluetooth</Text></TouchableOpacity>
                <TouchableOpacity style={connectStyle.controlBtn} onPress={scanDevices}><Text>Scan Devices</Text></TouchableOpacity>
                <View>
                    <View style={connectStyle.infoBox}>
                        <Text>Serial Number: R3CTA0L88KA</Text>
                        <Text>Device UUID: 00:18:31:EF:C9:CE</Text>
                        <Text>Service UUID: 0xFFE0</Text>
                        <Text>Charateristic1 UUID: 0xFFE1</Text>
                        <Text>Charateristic2 UUID: 0xFFE2</Text>
                        <Text>Charateristic3 UUID: 0xFFE3</Text>
                        <Text>{status}</Text>
                    </View>
                    <View style={connectStyle.connectBtnBox}>
                        <TouchableOpacity style={connectStyle.connectBtn}><Text>Connect</Text></TouchableOpacity>
                        <TouchableOpacity style={connectStyle.connectBtn}><Text>Disconnect</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Connect;