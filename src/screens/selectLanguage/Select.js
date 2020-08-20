import React, { useContext,useState } from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../../context/AuthContext'
import { styles } from '../../styles/styles'

export default function Select({navigation}) {

    const { login } = useContext(AuthContext);

    const [lang,setLang]=useState('en');

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor:'#edf0f2'
            }}>
                <Image source={require('../../images/language.png')}
                    style={{height:128,width:128,alignSelf:'center',marginVertical:'10%'}}
                />
            <Text style={[styles.heading,{alignSelf:'center',marginBottom:'5%'}]}>Welcome</Text>
            <TouchableOpacity style={[styles.row,{alignItems:'center',borderBottomColor: 'black',borderBottomWidth: 1}]} onPress={() => setLang('en') & navigation.navigate('LoginScreen')}>
                <Image source={require('../../images/english.png')}
                    style={{height:32,width:32,marginLeft:10}}
                />
                <Text style={styles.langText}>English</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={[styles.row,{alignItems:'center',borderBottomColor: 'black',borderBottomWidth: 1}]} onPress={() => setLang('hi') & navigation.navigate('LoginScreen')}>
                <Image source={require('../../images/hindi.png')}
                    style={{height:32,width:32,marginLeft:10}}
                />
                <Text style={styles.langText}>Hindi</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

