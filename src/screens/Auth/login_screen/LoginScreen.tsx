import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
const Logo = require("../../../../assets/images/thumb.png") 
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../navigation";

const LoginScreen = () => {
    
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions();

    const onSigninPress = () => {
        console.warn("Signin")
    }

     const onForgotpasswordPress = () => {
        console.warn("Signin")
    }

    const onRegisterPress = () => {
        navigation.navigate("Register")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"></Image>

            <Text style={{fontSize:30, marginVertical:20}}>Thumb Pay</Text>

            <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>

            <CustomButton onPress={onSigninPress} text={"Login"}/>
            <CustomButton onPress={onForgotpasswordPress} text={"Forgot Password?"} type="TERTIARY"/>
            <CustomButton onPress={onSigninPress} text={"Sign in with Facebook"} bgColor="#E7EAFA" fgColor="#4765A9"/>
            <CustomButton onPress={onSigninPress} text={"Sign in with Google"} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton onPress={onSigninPress} text={"Sign in with Apple"} bgColor="#E3E3E3" fgColor="#363636"/>
            <CustomButton onPress={onRegisterPress} text={"Don't have an account? Create one"} type="TERTIARY"/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
    },
    logo:{
        width:"40%",
        maxWidth:300,
        maxHeight:200,
    }
})

export default LoginScreen