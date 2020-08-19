import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { SliderBox } from "react-native-image-slider-box";


const itemDetails = {
    id: 'jhvf7t3fj',
    title: 'Macbook air',
    category: 'Electronics',
    price: '100000',
    image: ['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
}

export default function Details({id}) {
    return (
        <View>
            <SliderBox
                images={itemDetails.image}
                sliderBoxHeight={250}
                autoplay
                dotColor="#178ae8"
                circleLoop
                ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 10 }}
                imageLoadingColor="#03fcc2"
            />
        </View>
    )
}
