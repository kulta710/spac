import { StyleSheet } from 'react-native';

const signInStyle = StyleSheet.create({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    contentBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        borderWidth: 1,
        padding: 5
    },
    loginBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: 220,
    },
    loginBoxBtn: {
        borderWidth: 1,
        width: 70,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        borderWidth: 1,
        height: 40,
        width: 145
    },
    controlBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: 220,
        paddingTop: 5
    },
    controlBoxBtn: {
        borderWidth: 1,
        width: 107,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 3
    }
});

export default signInStyle;