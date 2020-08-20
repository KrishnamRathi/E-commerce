import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../styles/styles'
import { SliderBox } from "react-native-image-slider-box";
import { SafeAreaView } from 'react-native-safe-area-context';
import commaSeperated from '../../components/commaSeperated'
import { max } from 'react-native-reanimated';

const itemDetails = {
    id: 'jhvf7t3fj',
    title: 'Macbook air',
    description: 'This is macbook air. The best laptop to buy.',
    category: 'Electronics',
    price: '98000.25',
    image: ['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
}

export default function Details({ navigation, id }) {
    const [quantity, setQuantity] = useState(0);

    return (
        <SafeAreaView>
            <SliderBox
                images={itemDetails.image}
                sliderBoxHeight={250}
                dotColor="#178ae8"
                imageLoadingColor="#03fcc2"
            />
            <ScrollView style={styles.content}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <Text style={styles.boldFont}>{itemDetails.title}</Text>
                    <Text style={styles.boldFont}>₹ {commaSeperated(itemDetails.price)}</Text>
                </View>
                <View style={[styles.row, {marginVertical: 30, justifyContent: 'space-between'}]}>
                    <TouchableOpacity 
                        style={styles.minus}
                        onPress={() => quantity-1 <0 ? null: setQuantity(quantity-1)}
                    >
                        <Text style={styles.minusText} >-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginTop: 8}}>{quantity}</Text>
                    <TouchableOpacity 
                        style={styles.add}
                        onPress={() => quantity+1 >5 ? null : setQuantity(quantity+1)}
                    >
                        <Text style={styles.addText} >+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]}>
                        <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'black', fontSize: 20, fontStyle: 'italic'}}>Description</Text>
                <Text>{itemDetails.description}</Text>
                
                <View style={{marginBottom: 250}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
