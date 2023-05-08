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
    submitBtn: {
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 1,
        marginLeft: 5
    },
    formBox: {
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 300,
        height: 300
    },
    panelRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        flex: 0.3
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
        backgroundColor: "#ffffff"
    },
    panelText: {
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default formStyle;