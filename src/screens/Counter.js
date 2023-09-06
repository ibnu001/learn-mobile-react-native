import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../component/Button';

export default function Counter() {
    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter With State And Props</Text>

            <Button
                title='Increase'
                onPress={onIncrease}
                btnStyle={styles.button}
                textStyle={styles.textStyle}
            />

            <View>
                <Text>Count : {count}</Text>
            </View>

            <Button
                title='Decrease'
                onPress={onDecrease}
                btnStyle={[styles.button, {backgroundColor: 'red'}]}
                textStyle={styles.textStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: 100,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#B9B4C7',
        backgroundColor: '#053B50',
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white'
    }
})