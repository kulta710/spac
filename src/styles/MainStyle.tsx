import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    mainBox: {
      flex: 1,
    },
    gradBand: {
        height: 40,
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
    },
    gradLevel1: {
        width: "100%",
        flex: 0.2,
        backgroundColor: "#a1a1a1"
    },
    gradLevel2: {
        width: "100%",
        flex: 0.35,
        backgroundColor: "#636363"
    },
    gradLevel3: {
        width: "100%",
        flex: 0.45,
        backgroundColor: "#363635"
    }
});

export default mainStyle;