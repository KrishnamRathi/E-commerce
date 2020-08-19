import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'

export default function Select({navigation}) {

    const { login } = useContext(AuthContext);
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>select</Text>
            <Button title="Press me" onPress={() => login()} />
        </View>
    )
}

const styles = StyleSheet.create({})
