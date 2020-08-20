
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
    boldFont: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        height: 80,
        width: 120,
        borderRadius: 10,
        margin: 5
    },
    filterButton: {
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
    },
    add: {
        backgroundColor: '#178ae8',
        width: 40,
        height: 40,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addText: {
        color: 'black',
        fontSize: 18
    },
    minus: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    minusText: {
        color: 'black',
        fontSize: 18
    },
    button: {
        height: 40,
        width: 80,
        backgroundColor: '#178ae8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }

})