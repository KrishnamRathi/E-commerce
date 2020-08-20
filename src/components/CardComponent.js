import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles} from '../styles/styles'
import commaSeperated from './commaSeperated'


export default function CardComponent({navigation, title, price, image, id}) {
    return (
        <TouchableOpacity 
            style={[styles.row, styles.boxOutline, styles.content]}
            onPress={() => navigation.navigate('Details')}
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
