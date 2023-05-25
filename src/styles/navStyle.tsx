import { StyleSheet } from 'react-native';

const navStyle = StyleSheet.create({
    "navBox": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 60,
        backgroundColor: "#2b2b2b"
    },
    "navBtn": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        width: "25%",
        height: "95%",
        borderColor: "#8a8a8a"
    },
    "lastNavBtn": {
        borderRightWidth: 0

    },
    "navBtnText": {
        color: "white",
        fontWeight: "bold"
    }
});

export default navStyle;