import React from 'react';
import { StyleSheet } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>SPAC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    "header": {
        backgroundColor: "lightgray",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },
    "title": {
        fontWeight: "bold",
        fontSize: 30
    }
});

export default Header;