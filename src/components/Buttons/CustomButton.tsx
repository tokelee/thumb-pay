import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


interface ButtonInterface {
    onPress:any; 
    text:string; 
    type?:string; 
    bgColor?:string; 
    fgColor?: string
}

const CustomButton=({onPress, text, type ="PRIMARY", bgColor, fgColor}:ButtonInterface)=>{
    return(
        <Pressable 
        onPress={onPress} 
        style={[styles.container, styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor} : {}
        ]}
        >
           <Text style={[styles.text, styles[`text_${type}`],
            fgColor ? {color:fgColor} : {}
        ]}>{text}</Text>
        </Pressable>
    )
};

interface STYLES {
    [index:string]:object;
}

const styles: STYLES = StyleSheet.create({
    container:{
        width:"100%",
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor:"#3B71F3",
    },
    container_SECONDARY:{
        borderColor:"#3B71F3",
        borderWidth:1,
    },
    container_TERTIARY:{},
    text:{
        fontWeight: "bold",
        
    },
    text_PRIMARY:{
        color:"white"
    },
    text_SECONDARY:{
        color:"#3B71F3"
    },
    text_TERTIARY:{
        color:"gray"
    },
   
})

export default CustomButton