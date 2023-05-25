import { StyleSheet } from 'react-native';

const formStyle = StyleSheet.create({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    controlBox: {
        width: 300,
        height: 30,
        marginBottom: 3,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    selectDropDownBtn: {
        borderWidth: 1,
        height: 23,
        width: 120
    },
    selectDropDownText: {
        fontSize: 13
    },
    icon1: {
        width: 10,
        height: 10,
        marginRight: 11
    },
    submitBtn: {
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 1,
        marginLeft: 5
    },
    submitBtnText: {
        fontWeight: "bold"
    },
    formBox: {
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 300,
        height: 380
    },
    panelRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        flex: 0.23
    },
    panel: {
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flex: 0.3,
        backgroundColor: "#ffffff",
        shadowColor: "black",
        shadowOpacity: 1,
        elevation: 100
    },
    panelText: {
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default formStyle;