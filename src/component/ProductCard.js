import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard() {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://i.pinimg.com/736x/04/64/e8/0464e8529a62de67d237d65194af84a4.jpg'
                    }}
                />
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.productName}>Ayam Bakar</Text>
                <Text style={styles.price}>Rp. 25.000</Text>
                <Text style={styles.rate}>Rating  : 8</Text>
                <Text>Terjual : 20</Text>

                <View style={styles.discountSec}>
                    <Text style={styles.discountText}>Hemat 20000</Text>
                    <Text style={styles.discountText}>Diskon 20%</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        // borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    image: {
        // borderWidth: 1,
        // borderColor: 'red',
        width: 140,
        height: 210,
        borderRadius: 8
    },
    cardContent: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ff4800'
    },
    rate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 7
    },
    discountSec: {
        marginTop: 10,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    discountText: {
        padding: 5,
        height: 23,
        backgroundColor: '#edcbbe',
        fontSize: 12,
        borderRadius: 8
    }
})