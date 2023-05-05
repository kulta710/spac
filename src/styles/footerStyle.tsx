import { StyleSheet } from 'react-native';

const footerStyle = StyleSheet.create({
    footerBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: 80,
        padding: 5,
        paddingLeft: 10,
        backgroundColor: "#c4c4c4"
    },
    footerText: {
        fontSize: 13,
    }
});

export default footerStyle;