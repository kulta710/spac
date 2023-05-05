import { StyleSheet } from 'react-native';

const controlStyle = StyleSheet.create({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    statusBox: {
        flex: 0.15,
        borderTopWidth: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        paddingHorizontal: 7
    },
    peripheralFnBox: {
        flex: 0.1,
        borderTopWidth: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 5
    },
    peripheralFnBtn: {
        borderWidth: 1,
        borderRadius: 7,
        flex: 0.48,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
    },
    controlBox: {
        flex: 0.5,
        borderTopWidth: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
    },
    mainFnBox: {
        flex: 0.1,
        borderWidth: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        alignItmes: "center",
        padding: 5
    },
    mainFnBtn: {
        borderWidth: 1,
        borderRadius: 7,
        flex: 0.48,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default controlStyle;