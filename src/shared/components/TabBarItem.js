import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeType } from '../../store/todo/TodoAction'

export default function TabBarItem({ title }) {

    // const { title, type, setType, selected } = props

    const dispatch = useDispatch()
    const type = useSelector((state) => state.TodoReducer.type)
    const onSetType = () => {
        dispatch(changeType(title))
    }

    return (
        <TouchableOpacity
            onPress={onSetType}
            style={[
                styles.container,
                type === title ? styles.selected : null
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