import { StyleSheet } from 'react-native';

const footerStyle = StyleSheet.create({
    footerBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: 80,
        paddingTop: 5,
        paddingLeft: 11,
        backgroundColor: "#c4c4c4"
    },
    footerText: {
        fontSize: 13,
    }
});

export default footerStyle;