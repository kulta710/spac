import React from 'react';
import {SafeAreaView, View, Alert, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
  //const textElement = React.createElement(Text, null, 'Hello world!');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SPAC</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.buttonRow}>
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
        <TouchableOpacity style={styles.controller} onPress={autoFollowing}><Text style={styles.font30}>Auto-following</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
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
  }
});