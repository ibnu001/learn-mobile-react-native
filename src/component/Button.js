import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Button({title, onPress, btnStyle, textStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
        <Text style={textStyle}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})