import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function FilterButton({ title }) {
    return (
        <View style={styles.filterButton}>
            <Button title={title} color="#178ae8">
            </Button>
        </View>
    )
}
