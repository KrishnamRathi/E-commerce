import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SignupScreen({navigation}) {
    return (
        <ScrollView style={{
            flex: 1,
            marginTop: '2%',
            paddingLeft: 15,
            paddingRight: 20,
            backgroundColor:'#edf0f2'
            // alignItems: 'stretch'
        }}
            >
            <Text style={styles.label}>Name</Text>
            <TextInput placeholder='Enter name' style={styles.textInput} />
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder='Email' style={styles.textInput} />
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder='Username' style={styles.textInput} />
            <Text style={styles.label}>Mobile No.</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                placeholder='Enter mobile number'
                onChangeText={(value) => {
                    if(isNaN(value)){alert('Not a valid number')}
                    // if(value.length!==10){alert('Not a valid number')}
                }}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} placeholder='********'/> 
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} placeholder='********'/> 
            <View style={{marginTop: '5%'}}></View>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('LoginScreen')}}>
                <Text >Create Account</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize:18,
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
        borderRadius:3,
        borderWidth: 1,
        marginLeft: '30%',
        marginRight: '30%',
        borderColor: 'blue',
        backgroundColor:'#1c73ff',
        marginBottom: '10%'
    }
})
