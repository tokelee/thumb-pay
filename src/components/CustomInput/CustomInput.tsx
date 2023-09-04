import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type CustomInputProps={value:any; setValue:any; placeholder:string; secureTextEntry:boolean}

const CustomInput=({value, setValue, placeholder, secureTextEntry}: CustomInputProps)=>{
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"100%",

        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:10
    },
    input:{
        color:"black"
    }
})

export default CustomInput