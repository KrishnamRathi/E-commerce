import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,Button,ScrollView } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
    const { login } = useContext(AuthContext);

    return (
        <ScrollView style={{
            flex: 1,
            paddingLeft: 15,
            paddingRight: 20,
            backgroundColor:'#edf0f2'
            // justifyContent: 'center',
            // alignItems: 'stretch'
        }}>
            <View style={{marginTop:100}}>
                <Text style={styles.label}>Username or Email</Text>
                    <TextInput style={styles.textInput} />
                    <Text style={styles.label}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} /> 
                    <View style={{ paddingBottom: '7%', flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Text>Don't have an account? Sign Up </Text></TouchableOpacity>
                        <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
                    </View>
                <TouchableOpacity style={styles.button} onPress={()=>login()}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize:15,
        fontFamily:'Times New Roman',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: '3%'
    },
    label: {
        paddingLeft: 7,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
        color: '#1e2620',
        marginBottom: 5
    },
    button: {
        borderRadius:5,
        borderWidth: 1,
        marginLeft: '30%',
        marginRight: '30%',
        borderColor: 'blue',
        marginBottom: '10%'
    }
})
