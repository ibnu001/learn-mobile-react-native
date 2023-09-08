import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default function TodoButton({ onPress, nameIcon, colorIcon }) {
    return (
        <TouchableHighlight onPress={onPress}>
            <Icon name={nameIcon} color={colorIcon} size={26} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})