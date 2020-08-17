import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Select({navigation}) {

    const login = async () =>{
        try{
            await AsyncStorage.setItem("isLogin", "true")
        }catch(e){
            console.log(e);
        }
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>select</Text>
            <Button title="Press me" onPress={() => login()} />
        </View>
    )
}

const styles = StyleSheet.create({})
