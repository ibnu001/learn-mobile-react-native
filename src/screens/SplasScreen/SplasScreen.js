import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PATH from '../../navigation/NavigationPath'

export default function SplasScreen({navigation}) {

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate(PATH.LOGIN)
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://editoradevir.pt/wp-content/uploads/2020/04/Naruto-35.jpg'
                }}
            />

            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 10,
            }}>
                Naruto 'Enigma' Uzumaki
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        flex: 0.5,
        width: 300,
        borderRadius: 8
    }
})