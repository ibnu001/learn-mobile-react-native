import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const data = [
    {
        id: '1',
        name: 'Nasi Goreng',
        category: 'Makanan',
        price: 15000,
        rate: 4.5,
    },
    {
        id: '2',
        name: 'Ayam Goreng',
        category: 'Makanan',
        price: 20000,
        rate: 4.2,
    },
    {
        id: '3',
        name: 'Es Teh Manis',
        category: 'Minuman',
        price: 5000,
        rate: 4.0,
    },
    {
        id: '4',
        name: 'Soto Ayam',
        category: 'Makanan',
        price: 18000,
        rate: 4.6,
    },
    {
        id: '5',
        name: 'Bakso',
        category: 'Makanan',
        price: 12000,
        rate: 4.4,
    },
    {
        id: '6',
        name: 'Sate Ayam',
        category: 'Makanan',
        price: 15000,
        rate: 4.3,
    },
    {
        id: '7',
        name: 'Jus Jeruk',
        category: 'Minuman',
        price: 8000,
        rate: 4.7,
    },
    {
        id: '8',
        name: 'Mie Goreng',
        category: 'Makanan',
        price: 13000,
        rate: 4.1,
    },
]

const Products = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity style={[{ backgroundColor }]} onPress={onPress}>
        <View style={styles.item}>
            <Text style={[styles.name, { color: textColor }]} >Product : {item.name}</Text>
            <Text style={{ color: textColor }} >Category : {item.category}</Text>
            <Text style={{ color: textColor }} >Price        : {item.price}</Text>
            <Text style={{ color: textColor }} >Rate         : {item.rate}</Text>
        </View>
    </TouchableOpacity>
)

export default function FlatListExample() {
    const [selectedId, setSelectedId] = useState()

    const renderProduct = ({ item }) => {
        const backgroundColor = item.id === selectedId ? 'black' : 'white'
        const textColor = item.id === selectedId ? 'white' : 'black'
        return (
            <Products
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})