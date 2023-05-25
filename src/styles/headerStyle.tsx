import { StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
    "headerBox": {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },
    "title": {
        width: 85
    },
    "subTitle": {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10
    }
});

export default headerStyle;