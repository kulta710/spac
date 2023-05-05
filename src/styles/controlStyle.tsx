import { StyleSheet } from 'react-native';

const controlStyle = StyleSheet.create({
    "controller": {
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        backgroundColor: "lightgray"
      },
      "buttonRow": {
        display: "flex",
        flexDirection: "row",
    
      },
      "button": {
        borderWidth: 1,
        width: 80,
        height: 80,
        margin: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
      },
      "pseudoButton": {
        borderWidth: 0,
        width: 80,
        height: 80,
        margin: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center"
      },
      "font30": {
        fontSize: 18
      },
      "buttonStyle": {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15
      },
      "buttonTextStyle": {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16
      }
});

export default controlStyle;