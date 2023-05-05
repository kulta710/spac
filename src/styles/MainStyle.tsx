import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
    "container": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    mainBox: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center"
    },
});

export default mainStyle;