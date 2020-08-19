import React, { useContext,useState } from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../../context/AuthContext'

export default function Select({navigation}) {

    const { login } = useContext(AuthContext);
    const [lang,setLang]=useState('en');

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor:'#edf0f2'
            // alignItems: 'center'
            }}>
            <Text style={styles.text}>WELCOME</Text>
            <TouchableOpacity style={{borderBottomColor: 'black',borderBottomWidth: 1}} onPress={() => setLang('en') & navigation.navigate('LoginScreen')}>
                <Text style={styles.langText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomColor: 'black',borderBottomWidth: 1}} onPress={() => setLang('hi') & navigation.navigate('LoginScreen')}>
                <Text style={styles.langText}>Hindi</Text>
            </TouchableOpacity>
            {/* <RadioButton/> */}
            {/* <Button title="Press me" onPress={() => {navigation.navigate('LoginScreen')}} /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    langText:{
        fontSize: 30,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
        color: '#1e2620',
        marginBottom: '2%',
        marginTop: '2%',
        paddingLeft: 15,
        paddingRight: 20,
    },
    text:{
        fontSize: 30,
        fontWeight: "bold",
        fontFamily:'Times New Roman',
        color: '#1e2620',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})
