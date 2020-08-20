import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles} from '../styles/styles'

function commaSeperated(x){
    x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    
    return res;
}


export default function CardComponent({title, price, image, id}) {
    return (
        <TouchableOpacity 
            style={[styles.row, styles.boxOutline, styles.content]}
            onPress={() => navigation.navigate('Details', {id: {id}})}
        >
            <View style={styles.column}>
                <Image
                    style={styles.image}
                    source={{uri: image[0]}}
                />
            </View>
            <View style={styles.column}>
                <Text>{title}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.boldFont} >₹ {commaSeperated(price)}</Text>
            </View>
        </TouchableOpacity>
    )
}
