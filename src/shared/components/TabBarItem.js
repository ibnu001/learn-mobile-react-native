import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TabBarItem(props) {

    const { title, type, setType, selected } = props

    return (
        <TouchableOpacity
            onPress={setType}
            style={[
                styles.container,
                selected ? styles.selected : null
            ]}
        >
            <Text
                style={[
                    styles.text,
                    type === title ? styles.bold : null
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    selected: {
        backgroundColor: 'white',
    },
    border: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
    }
})