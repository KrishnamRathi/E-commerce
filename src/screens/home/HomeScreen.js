import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Context as AuthContext } from '../../context/AuthContext'



export default function HomeScreen({navigation}) {
    const { logout } = useContext(AuthContext);

    return (
        <View>
            <Text>Home</Text>
            <Button title='Log out' onPress={() => logout()} />
        </View>
    )
}

const styles = StyleSheet.create({})
