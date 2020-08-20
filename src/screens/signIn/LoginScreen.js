import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,Button,ScrollView,TouchableOpacity } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { styles } from '../../styles/styles'

export default function LoginScreen({navigation}) {
    const { login } = useContext(AuthContext);

    return (
        <ScrollView style={{
            flex: 1,
            paddingLeft: 15,
            paddingRight: 20,
            backgroundColor:'#edf0f2',
        }}>
            <View style={{marginTop:100}}>
            <Text style={[styles.heading,{marginBottom:'20%'}]}>Login</Text>
                <Text style={styles.label}>Username or Email</Text>
                    <TextInput style={[styles.textInput,styles.shadows]} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput secureTextEntry={true} style={[styles.textInput,styles.shadows]} /> 
                    <View style={{ paddingBottom: '7%', flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Text>Don't have an account? Sign Up </Text></TouchableOpacity>
                        <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={[styles.button]} onPress={()=>login()}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
    )
}

