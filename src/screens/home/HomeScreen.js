import React, { useContext } from 'react'

import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Button } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { styles } from '../../styles/styles'
import { Header } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from "react-native-image-slider-box";
import CardComponent from '../../components/CardComponent'
import FilterButton from '../../components/FilterButton'

const data = [
    {
        id: 'jhvf7t3fj',
        title: 'Macbook air',
        category: 'Electronics',
        price: '98000.25',
        description: 'This is macbook air. The best laptop to buy.',
        image: ['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
    },
    {
        id: 'jhvf7tjj',
        title: 'Macbook pro',
        category: 'Electronics',
        price: '200000',
        description: 'This is macbook air. The best laptop to buy.',
        image: ['https://www.notebookcheck.net/uploads/tx_nbc2/Bildschirmfoto_2019-10-01_um_12.20.11.png'],
    },
    {
        id: 'jhvf7tjpop',
        title: 'Mustang',
        category: 'Automobile',
        price: '6000000',
        description: 'This is macbook air. The best laptop to buy.',
        image: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-ford-mustang-mach-1-109-1592231891.jpg?crop=0.801xw:0.601xh;0.159xw,0.156xh&resize=1200:*'],
    },
    {
        id: 'jhvf7t3fz',
        title: 'Macbook air',
        category: 'Electronics',
        price: '100000',
        description: 'This is macbook air. The best laptop to buy.',
        image: ['https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg'],
    },
]

const images = [
    "https://www.notebookcheck.net/uploads/tx_nbc2/Bildschirmfoto_2019-10-01_um_12.20.11.png",
    "https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-ford-mustang-mach-1-109-1592231891.jpg?crop=0.801xw:0.601xh;0.159xw,0.156xh&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo-zwMx0l8_edLNBwt9xpk6yf25JOB2pbeYw&usqp=CAU"
]


export default function HomeScreen({ navigation }) {
    

    const filters = [
        'Price: high to low',
        'Price: low to high'
    ]

    return (
        <SafeAreaView>
            <Header
                leftComponent={{ icon: 'menu', color: '#178ae8', onPress: () => navigation.openDrawer() }}
                centerComponent={{ text: 'Shoppp', style: { color: '#178ae8', fontSize: 20 } }}
                containerStyle={{
                    backgroundColor: '#edf0f2',
                }}
            />
            <FlatList
                ListHeaderComponent={
                    <View>
                        <SliderBox
                            images={images}
                            sliderBoxHeight={250}
                            autoplay
                            dotColor="#178ae8"
                            circleLoop
                            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 10 }}
                            imageLoadingColor="#03fcc2"
                        />
                        {/* Frequently bought */}
                        <View style={styles.content}>
                            <Text style={styles.boldFont}>Frequently bought</Text>
                            <FlatList
                                data={images}
                                keyExtractor={item => item}
                                renderItem={({ item, i }) => <TouchableOpacity>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item }} />
                                </TouchableOpacity>
                                }
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        {/* Most Visited */}
                        <View style={styles.content}>
                            <Text style={styles.boldFont}>Most Visited</Text>
                            <FlatList
                                data={images}
                                keyExtractor={item => item}
                                renderItem={({ item, i }) => <TouchableOpacity>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item }} />
                                </TouchableOpacity>
                                }
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <Button title='logout' onPress={()=> logout()}></Button>
                        <Text style={{ margin: 10, textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 20 }}>Popular products</Text>
                    </View>
                }
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <CardComponent
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    navigation={navigation}  />
                }
                ListFooterComponent={
                    <View style={{ marginBottom: 70, }}>
                    </View>
                }
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.content}>

                <View style={{ alignItems: 'flex-end' }}>
                    <FilterButton title={'Filter'} />
                </View>
            </View>
        </SafeAreaView>
    )
}
