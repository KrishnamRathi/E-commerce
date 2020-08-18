import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,Button } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'

export default function LoginScreen({navigation}) {
    const { login } = useContext(AuthContext);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Username or Email</Text>
                <TextInput style={styles.textInput} />
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} /> 
                <Text>Don't have an account? </Text>
                <Text onPress={() => navigation.navigate('SignupScreen')}>Sign Up </Text>
            <Button title="Log In" onPress={()=>login()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        
    },
})
