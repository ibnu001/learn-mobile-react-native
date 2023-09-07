import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard({ product }) {

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });

    const discount = product.discount * 100
    const priceAfterDisc = formatter.format(product.price - (product.price * product.discount))

    // const formattedPriceAfterDisc = formatter.format(priceAfterDisc);
    // const formattedPriceAfterDisc = formatter.format(priceAfterDisc);

    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: product.imgUrl
                    }}
                />
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.price}>{formatter.format(product.price)}</Text>
                <Text style={styles.rate}>Rating  : {product.rate}</Text>
                <Text>Terjual : {product.terjual}</Text>

                <View style={styles.discountSec}>
                    <Text style={styles.discountText}>Hemat : {priceAfterDisc}</Text>
                    <Text style={styles.discountText}>Diskon : {discount}%</Text>
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
        width: 180,
        height: 180,
        borderRadius: 8
    },
    cardContent: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-start'
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        // marginTop: 5,
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
        // height: 23,
        backgroundColor: '#edcbbe',
        fontSize: 12,
        borderRadius: 8
    }
})