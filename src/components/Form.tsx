import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropDown from 'react-native-select-dropdown';
import formStyle from '../styles/formStyle';

function Form() {
    const panels = ["Active", "Passive", "Passive Wheel", "None"];
    
    return (
        <View style={formStyle.mainBox}>
            <View style={formStyle.controlBox}>
                <SelectDropDown data={panels} defaultValueByIndex={0} onSelect={(selectedItem, index) => {}} buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}} rowTextForSelection={(item, index) => {return item}} buttonStyle={formStyle.selectDropDownBtn} buttonTextStyle={formStyle.selectDropDownText} renderDropdownIcon={isOpened => {return <FontAwesome name={isOpened ? 'arrow-up' : 'arrow-down'} color={'#444'} size={18}/>}} />
                <TouchableOpacity style={formStyle.submitBtn}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={formStyle.formBox}>
                <View style={formStyle.panelRow}>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                </View>
                <View style={formStyle.panelRow}>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                </View>
                <View style={formStyle.panelRow}>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                    <View style={formStyle.panel}><Text>None</Text></View>
                </View>
            </View>
        </View>
    );
}

export default Form;