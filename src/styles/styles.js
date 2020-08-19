
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        margin: 10
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    boxOutline: {
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    boldFont:{ 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    image: {
        height: 80,
        width: 120,
        borderRadius: 10,
        margin: 5
    },
    filterButton:{
        zIndex: 100,
        position: 'absolute',
        bottom: 100,
        height: 40,
        width: 80,
        borderRadius: 8,
        backgroundColor: '#178ae8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterFont: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})