import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
const Logo = require("../../../../assets/images/Logo.png") 
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/Buttons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../../../navigation";

const RegisterScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const [username, setUsername] = useState('')
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
        navigation.navigate("Login")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

            <Text style={{fontSize:40, marginVertical:20, fontWeight:"bold"}}>Create Account</Text>

            <CustomInput placeholder="Username" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            <CustomInput placeholder="Confirm password" value={password} setValue={setPassword} secureTextEntry/>
            
            <CustomButton onPress={onSigninPress} text={"Register"}/>

            <Text style={styles.text}>
                By registering, you confirm that you accept our <Text style={styles.link}>Terms of use</Text> and <Text style={styles.link}>Privacy Policy</Text>
            </Text>

            
            <CustomButton onPress={onSigninPress} text={"Sign in with Facebook"} bgColor="#E7EAFA" fgColor="#4765A9"/>
            <CustomButton onPress={onSigninPress} text={"Sign in with Google"} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton onPress={onSigninPress} text={"Sign in with Apple"} bgColor="#E3E3E3" fgColor="#363636"/>
            <CustomButton onPress={onRegisterPress} text={"Already have an account? Login"} type="TERTIARY"/>
        </View>
        </ScrollView>
    )
}

interface STYLE {
    [index:string]:object
}

const styles: STYLE = StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
    },
    
    text:{
        color:"gray",
        marginVertical:10
    },
    link:{
        color:"orange"
    }
})

export default RegisterScreen