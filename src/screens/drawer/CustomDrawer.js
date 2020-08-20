import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../styles/styles'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons'
import { Context as AuthContext } from '../../context/AuthContext'

export default function CustomDrawer({ navigation }) {

    const { logout } = useContext(AuthContext);

    return (
        <View style={[{ justifyContent: 'center', backgroundColor: '#edf0f2', alignItems: 'center', flex: 1 }]}>

            <View style={{bottom: '10%'}}>
                <Image source={require('../../images/english.png')}
                    style={{ height: 150, width: 150, borderRadius: 1000, }}
                />
                <Text style={{alignSelf: 'center', 
                    fontSize: 20, 
                    color: 'black', 
                    fontWeight: 'bold', 
                    marginTop: 20
                }}
                >Krishnam Rathi</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.drawerButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <MaterialIcons name='home' size={30} color='black' />
                    <Text style={styles.drawerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <MaterialCommunityIcons name='face-profile' color='black' size={30} />
                    <Text style={styles.drawerText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerButton}
                    onPress={() => navigation.navigate('MyOrders')}
                >
                    <FontAwesome5 name='shopping-bag' color='black' size={30} />
                    <Text style={styles.drawerText}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerButton}
                    onPress={() => logout()}
                >
                    <MaterialCommunityIcons name='logout' color='black' size={30} />
                    <Text style={styles.drawerText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
