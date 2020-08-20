import React, { useContext,useState } from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../../context/AuthContext'
import { styles } from '../../styles/styles'
import {SafeAreaView} from 'react-native-safe-area-context';
import CardComponent from '../../components/CardComponent'
import { FlatList } from 'react-native-gesture-handler';
import { useScreens } from 'react-native-screens';
import { useIsDrawerOpen } from '@react-navigation/drawer';

export default function MyOrders({navigation}) {
    const user={
        id:'1sdaf',
        name:'Saniya Agrawal',
        email:'saniya.agrawal@gmail.com',
        username:'saniya30',
        mobile:'1234567899',
        gender:'female',
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
        <View style={{
                height:'100%',
                width:'100%',
                backgroundColor:'#edf0f2'
            }}>
            <Text style={styles.label}>My Orders: </Text>
            <FlatList
                data={user.orders}
                keyExtractor={(item)=>item.id}
                renderItem={({item,index})=> <CardComponent
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            id={item.id}
                            navigation={navigation}  />
                }
            />
            {/* <Text>Orders: {user.orders}</Text> */}
        </View>
        </SafeAreaView>
    )
}

