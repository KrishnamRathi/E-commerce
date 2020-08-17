import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'



export default function HomeScreen({navigation}) {

    const logout = async () => {
        try{
            await AsyncStorage.removeItem("isLogin")
        }catch(e){
            console.log(e)
        }
    }

    return (
        <View>
            <Text>Home</Text>
            <Button title='Log out' onPress={() => logout()} />
        </View>
    )
}

const styles = StyleSheet.create({})
