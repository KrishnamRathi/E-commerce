import React, { useContext,useState } from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../../context/AuthContext'
import { styles } from '../../styles/styles'
import {SafeAreaView} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile({navigation}) {
    const user={
        id:'1sdaf',
        name:'Saniya Agrawal',
        email:'saniya.agrawal@gmail.com',
        username:'saniya30',
        mobile:'1234567899',
        gender:'Female',
        address:'106, luniyapura, gupta compound, Mhow',
        pincode:'362321',
        city:'Indore',
        image:'../../images/default.jpg',
        orders:[
            {
                id:'1awefsr',
                price:100000,
                title: 'macbook air',
                quantity:1,
                image:['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
                status:'pending'
            },
            {
                id:'2wefrgj',
                price:6000000,
                quantity:3,
                title: 'mustang',
                image:['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
                status:'done'
            },
        ]
    }

    return (
        <SafeAreaView>
        <ScrollView style={{
                height:'100%',
                width:'100%',
                backgroundColor:'#edf0f2'
            }}>
            
            <View style={{marginTop:'10%',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../images/default.jpg')} style={{height: 128, width: 128, borderRadius: 1000}}/>            
                <View style={[styles.row,{justifyContent:'center'}]}>
                    <Text style={styles.label}>Hi, {user.name}  </Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <MaterialIcons name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.labelProfile}>Username </Text>
                <Text style={styles.addText}>{user.username}</Text>
                <Text style={styles.labelProfile}>Gender </Text>
                <Text style={styles.addText}>{user.gender}</Text>
                <Text style={styles.labelProfile}>Email</Text>
                <Text style={styles.addText}>{user.email}</Text>
                <Text style={styles.labelProfile}>Mobile</Text>
                <Text style={styles.addText}>{user.mobile}</Text>
                <Text style={styles.labelProfile}>Address</Text>
                <Text style={styles.addText}>{user.address}</Text>
                <Text style={styles.addText}>{user.city}, {user.pincode}</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

