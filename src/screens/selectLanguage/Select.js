import React, { useContext,useState } from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../../context/AuthContext'
import RadioButton from './RadioButton';

export default function Select({navigation}) {
    const { login } = useContext(AuthContext);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>select</Text>
            <RadioButton/>
            <Button title="Press me" onPress={() => {navigation.navigate('LoginScreen')}} />
        </View>
    )
}

const styles = StyleSheet.create({})
