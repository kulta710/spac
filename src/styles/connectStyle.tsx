import { StyleSheet } from 'react-native';

const connectStyle = StyleSheet.create({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    contentBox: {
        borderWidth: 1,
        padding: 10
    },
    controlBtn: {
        borderWidth: 1,
        width: 220,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        marginBottom: 5
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        marginBottom: 5
    },
    connectBtnBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        aglignItems: "center"
    },
    connectBtn: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        width: 108,
        height: 25
    }
});

export default connectStyle;