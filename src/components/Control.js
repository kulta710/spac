import React from 'react';
import { StyleSheet } from 'react-native';

function Control() {
    return (
        <View>
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
    );
}

const styles = StyleSheet.create({
    
});

export default Control;