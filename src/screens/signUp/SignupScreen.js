import React,{useContext} from 'react'
import { StyleSheet, Text, View ,TextInput,Button } from 'react-native'

export default function SignupScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Name</Text>
            <TextInput style={styles.textInput} />
            <Text>Username or Email</Text>
            <TextInput style={styles.textInput} />
            <Text>Mobile No.</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                placeholder='Enter mobile number'
                onChangeText={(value) => {
                    if(isNaN(value)){alert('Not a valid number')}
                    // if(value.length!==10){alert('Not a valid number')}
                }}
            />
            <Text>Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} /> 
            <Text>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} /> 
            
            <Button title="Create Account" onPress={()=>{navigation.navigate('LoginScreen')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        
    },
})
