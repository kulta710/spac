import React from 'react';
import { StyleSheet } from 'react-native';

function Connect() {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} onPress={scanDevices}>
                <Text style={styles.buttonTextStyle}>Scan Bluetooth Devices</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Connect;