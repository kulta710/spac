import { StyleSheet } from 'react-native';

const navStyle = StyleSheet.create({
    "navBox": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 50,
        backgroundColor: "#e8e8e8"
    },
    "navBtn": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        width: "24%",
        height: 42,
        borderRadius: 7,
        borderColor: "#8a8a8a"
    }
    ,"navBtnText": {
        fontWeight: "bold"
    }
});

export default navStyle;