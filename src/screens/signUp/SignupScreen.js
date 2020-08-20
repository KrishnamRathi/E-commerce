import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../../styles/styles'

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
            <Text style={[styles.heading,{marginBottom:'5%'}]}>Sign up</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput placeholder='Enter name' style={[styles.textInput,styles.shadows]} />
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder='Username' style={[styles.textInput,styles.shadows]} />
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder='Email' style={[styles.textInput,styles.shadows]} />
            <Text style={styles.label}>Mobile No.</Text>
            <TextInput
                keyboardType="numeric"
                style={[styles.textInput,styles.shadows]}
                placeholder='Enter mobile number'
                onChangeText={(value) => {
                    if(isNaN(value)){alert('Not a valid number')}
                    // if(value.length!==10){alert('Not a valid number')}
                }}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={[styles.textInput,styles.shadows]} placeholder='********'/> 
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={[styles.textInput,styles.shadows]} placeholder='********'/> 
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text>Already have an account? Sign In </Text></TouchableOpacity>
            <View style={{marginTop: '3%'}}></View>
            <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity style={[styles.button]} onPress={()=> {navigation.navigate('LoginScreen')}}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

