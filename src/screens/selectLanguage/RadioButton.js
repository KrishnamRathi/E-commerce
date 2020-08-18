import React,{useState} from 'react';
import {TouchableOpacity, View, StyleSheet,Text} from 'react-native';

export default function RadioButton() {
    const [lang,setLang]=useState();
        const options= [
            {
                key:'en',
                label: 'English'
            },
            {
                key:'hi',
                label: 'Hindi'
            }
        ];
        return(
            options.map(item => {
                return(
                    <View key={item.key} style={styles.buttonContainer}>
                        <Text>{item.label}</Text>
                        <TouchableOpacity
                            style={styles.circle}
                            onPress={() => setLang(item.key)}
                        >  
                            { lang === item.key && (<View style={styles.checkedCircle} />) } 
                        </TouchableOpacity>
                    </View>
                );
                }
            )
        );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
})