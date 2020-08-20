import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Select from './screens/selectLanguage/Select'
import LoginScreen from './screens/signIn/LoginScreen'
import SignupScreen from './screens/signUp/SignupScreen'
import HomeScreen from './screens/home/HomeScreen'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from './context/AuthContext'
import CartScreen from './screens/home/CartScreen';
import Profile from './screens/drawer/Profile'
import MyOrders from './screens/drawer/MyOrders'
import Details from './screens/details/Details'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomDrawer from './screens/drawer/CustomDrawer'


const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const LoginScreens = () => (
    <LoginStack.Navigator initialRouteName='Select'>
        <LoginStack.Screen name="ChooseLanguage" component={Select} />
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <LoginStack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
    </LoginStack.Navigator>
)

const DrawerScreens = () => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} /> } >
        <Drawer.Screen name="Home" component={TabScreens} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="Logout" component={HomeScreen} />
    </Drawer.Navigator>
)

const TabScreens = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home"
            component={HomeScreens}
            options={{
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="home" color={focused ? '#178ae8' : 'gray'} size={30} />
                )
            }}
        />
        <Tab.Screen name="Cart"
            component={CartScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <AntDesign name="shoppingcart" color={focused ? '#178ae8' : 'gray'} size={30} />
                )
            }}

        />
    </Tab.Navigator>
)
const HomeScreens = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name='Details' component={Details} options={{ headerShown: false }} />
    </HomeStack.Navigator>
)

const SplashScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>

    </View>
)


const selectFlow = (flow) => {

    switch (flow) {
        case 0:
            return <SplashScreen />
        case 1:
            return <LoginScreens />
        case 2:
            return <DrawerScreens />
        default:
            return <LoginScreens />
    }
}


export default function Flows() {
    const [flow, setFlow] = useState(0);
    const { state } = useContext(AuthContext)

    //console.log(state)
    useEffect(() => {
        const set = async () => {
            try {
                const res = await AsyncStorage.getItem('isLogin');
                res != null ? setFlow(2) : setFlow(1);
                //  console.log(res)    
            } catch (err) {
                console.log(err + "**")
            }
        }
        setTimeout(() => set(), 1500);
    }, [state]);
    return selectFlow(flow)
}