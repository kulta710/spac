import { StyleSheet } from 'react-native';

const signInStyle = StyleSheet.create({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    welcomeBox: {
        width: 230,
        paddingBottom: 10
    },
    welcome: {
        fontSize: 17,
        fontWeight: "bold"
    },
    welcomeText: {

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
    },
    aboutTeamBox: {
        marginTop: 10,
        backgroundColor: "#b8b8b8",
        padding: 10,
        borderRadius: 10
    },
    aboutTeamTitle: {
        fontWeight: "bold"
    },
    aboutTeamText: {
        fontSize: 12
    }
});

export default signInStyle;