import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Select from './screens/selectLanguage/Select'
import LoginScreen from './screens/signIn/LoginScreen'
import HomeScreen from './screens/home/HomeScreen'
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';



const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const LoginScreens = () => (
    <LoginStack.Navigator initialRouteName='Select' >
        <LoginStack.Screen name="ChooseLanguage" component={Select} />
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
)


const DrawerScreens = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
)

const TabScreens = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={DrawerScreens} />
        <Tab.Screen name="Cart" component={Select} />
    </Tab.Navigator>
)

const SplashScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>

    </View>
)

const selectFlow =  (flow, setFlow) => {

    switch (flow) {
        case 0:
            return <SplashScreen />
        case 1:
            return <LoginScreens />
        case 2:
            return <TabScreens />
        default:
            return <LoginScreens />
    }
}

export default function Flows() {
    const [flow, setFlow] = useState(0);
    useEffect(() => {
        const set = async ()=>{
            try {
                
                const res=await AsyncStorage.getItem('isLogin');
                res!=null ? setFlow(2) : setFlow(1);
                console.log(res)
            } catch (err) {
                console.log(err + "**")
            }
        }
        setTimeout(() => set(), 1500);
    });

    console.log();
    return selectFlow(flow, setFlow)
}