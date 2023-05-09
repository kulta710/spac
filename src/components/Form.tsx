import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Alert, Image } from 'react-native';
import SelectDropDown from 'react-native-select-dropdown';
import formStyle from '../styles/formStyle';

function Form() {
    const panels = ["Active", "Passive", "Passive Wheel", "None"];

    const [panelType, setPanelType] = useState("None");
    const [color1, setColor1] = useState("#ffffff");
    const [panelType1, setPanelType1] = useState("None");
    const [color2, setColor2] = useState("#ffffff");
    const [panelType2, setPanelType2] = useState("None");
    const [color3, setColor3] = useState("#ffffff");
    const [panelType3, setPanelType3] = useState("None");
    const [color4, setColor4] = useState("#ffffff");
    const [panelType4, setPanelType4] = useState("None");
    const [color5, setColor5] = useState("#ffffff");
    const [panelType5, setPanelType5] = useState("None");
    const [color6, setColor6] = useState("#ffffff");
    const [panelType6, setPanelType6] = useState("None");
    const [color7, setColor7] = useState("#ffffff");
    const [panelType7, setPanelType7] = useState("None");
    const [color8, setColor8] = useState("#ffffff");
    const [panelType8, setPanelType8] = useState("None");
    const [color9, setColor9] = useState("#ffffff");
    const [panelType9, setPanelType9] = useState("None");

    function selectPanel1() {
        switch (panelType) {
            case "Active": setColor1("#757575"); break;
            case "Passive": setColor1("#d4d4d4"); break;
            case "Passive Wheel": setColor1("#a6a6a6"); break;
            case "None": setColor1("#ffffff"); break;
        }
        setPanelType1(panelType);
    }
    function selectPanel2() {
        switch (panelType) {
            case "Active": setColor2("#757575"); break;
            case "Passive": setColor2("#d4d4d4"); break;
            case "Passive Wheel": setColor2("#a6a6a6"); break;
            case "None": setColor2("#ffffff"); break;
        }
        setPanelType2(panelType);
    }
    function selectPanel3() {
        switch (panelType) {
            case "Active": setColor3("#757575"); break;
            case "Passive": setColor3("#d4d4d4"); break;
            case "Passive Wheel": setColor3("#a6a6a6"); break;
            case "None": setColor3("#ffffff"); break;
        }
        setPanelType3(panelType);
    }
    function selectPanel4() {
        switch (panelType) {
            case "Active": setColor4("#757575"); break;
            case "Passive": setColor4("#d4d4d4"); break;
            case "Passive Wheel": setColor4("#a6a6a6"); break;
            case "None": setColor4("#ffffff"); break;
        }
        setPanelType4(panelType);
    }
    function selectPanel5() {
        switch (panelType) {
            case "Active": setColor5("#757575"); break;
            case "Passive": setColor5("#d4d4d4"); break;
            case "Passive Wheel": setColor5("#a6a6a6"); break;
            case "None": setColor5("#ffffff"); break;
        }
        setPanelType5(panelType);
    }
    function selectPanel6() {
        switch (panelType) {
            case "Active": setColor6("#757575"); break;
            case "Passive": setColor6("#d4d4d4"); break;
            case "Passive Wheel": setColor6("#a6a6a6"); break;
            case "None": setColor6("#ffffff"); break;
        }
        setPanelType6(panelType);
    }
    function selectPanel7() {
        switch (panelType) {
            case "Active": setColor7("#757575"); break;
            case "Passive": setColor7("#d4d4d4"); break;
            case "Passive Wheel": setColor7("#a6a6a6"); break;
            case "None": setColor7("#ffffff"); break;
        }
        setPanelType7(panelType);
    }
    function selectPanel8() {
        switch (panelType) {
            case "Active": setColor8("#757575"); break;
            case "Passive": setColor8("#d4d4d4"); break;
            case "Passive Wheel": setColor8("#a6a6a6"); break;
            case "None": setColor8("#ffffff"); break;
        }
        setPanelType8(panelType);
    }
    function selectPanel9() {
        switch (panelType) {
            case "Active": setColor9("#757575"); break;
            case "Passive": setColor9("#d4d4d4"); break;
            case "Passive Wheel": setColor9("#a6a6a6"); break;
            case "None": setColor9("#ffffff"); break;
        }
        setPanelType9(panelType);
    }
    
    return (
        <View style={formStyle.mainBox}>
            <View style={formStyle.controlBox}>
                <SelectDropDown
                    data={panels}
                    defaultValueByIndex={0}
                    onSelect={(selectedItem, index) => {}}
                    buttonTextAfterSelection={(selectedItem, index) => {setPanelType(selectedItem); return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                    buttonStyle={formStyle.selectDropDownBtn}
                    buttonTextStyle={formStyle.selectDropDownText}
                    renderDropdownIcon={isOpened => {return <Image source={require("spac/android/app/src/main/assets/arrow-down-sign-to-navigate.png")} style={formStyle.icon1}/>}}
                    dropdownIconPosition={"right"}
                />
                <TouchableOpacity style={formStyle.submitBtn}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={formStyle.formBox}>
                <View style={formStyle.panelRow}>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color1}]} onPress={selectPanel1}><Text style={formStyle.panelText}>{panelType1}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color2}]} onPress={selectPanel2}><Text style={formStyle.panelText}>{panelType2}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color3}]} onPress={selectPanel3}><Text style={formStyle.panelText}>{panelType3}</Text></TouchableOpacity>
                </View>
                <View style={formStyle.panelRow}>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color4}]} onPress={selectPanel4}><Text style={formStyle.panelText}>{panelType4}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color5}]} onPress={selectPanel5}><Text style={formStyle.panelText}>{panelType5}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color6}]} onPress={selectPanel6}><Text style={formStyle.panelText}>{panelType6}</Text></TouchableOpacity>
                </View>
                <View style={formStyle.panelRow}>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color7}]} onPress={selectPanel7}><Text style={formStyle.panelText}>{panelType7}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color8}]} onPress={selectPanel8}><Text style={formStyle.panelText}>{panelType8}</Text></TouchableOpacity>
                    <TouchableOpacity style={[formStyle.panel, {backgroundColor: color9}]} onPress={selectPanel9}><Text style={formStyle.panelText}>{panelType9}</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Form;