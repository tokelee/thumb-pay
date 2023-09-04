import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, StyleSheet, SafeAreaView} from "react-native";
import LoginScreen from '../screens/Auth/login_screen';
import RegisterScreen from '../screens/Auth/register_screen';
import GenesisScreen from '../screens/genesis';

export type StackParams = {
    Genesis: undefined;
    Login: undefined;
    Register: undefined;
}

const Stack = createNativeStackNavigator<StackParams>()

const Navigation = () => {
    return(
        <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Genesis" component={GenesisScreen}/>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:"#F9FBFC"
    }
  })

export default Navigation