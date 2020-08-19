import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'

export default function FilterButton({ title }) {
    return (
        <TouchableOpacity style={[styles.filterButton, styles.shadows]}>
            <Text style={styles.filterFont}>{title}</Text>
        </TouchableOpacity>
    )
}
