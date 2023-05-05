import { StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
    "headerBox": {
        backgroundColor: "lightgray",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: 45
    },
    "title": {
        color: "black",
        fontWeight: "bold",
        fontSize: 25
    },
    "subTitle": {
        color: "black",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10
    }
});

export default headerStyle;