import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Card({ price, stock, discount, children }) {
    const unavailable = stock == 0 ? true : false
    const imageChildren = children
    return (
        <View style={styles.card}>
            {imageChildren}

            {/* <Image
                style={styles.cardImage}
                source={require('../../assets/cover-manga-naruto.jpg')}
            /> */}

            <View style={styles.cardContent}>

                <View style={styles.priceStockContainer}>

                    <View>
                        <Text style={styles.priceText}>Rp.
                            <Text style={styles.boldPrice}>{price || 9000}</Text>
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.stockText}>Stock {stock || 0}</Text>
                    </View>

                </View>

            </View>

            <View style={[
                styles.overlay,
                unavailable ?
                    {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 30,
                        borderRadius: 0,
                        backgroundColor: 'rgba(59, 56, 56, 0.7)',
                    } : {
                        top: 0,
                        left: 90,
                        right: 0,
                        bottom: 220,
                        backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    }
            ]}
            >
                {!unavailable ? (
                    <View >
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            {discount || 50}%
                        </Text>
                    </View>
                ) : (
                    <View >
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            HAHAHA ABISSS
                        </Text>
                    </View>
                )}


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 200,
        width: 150,
        // borderWidth: 1,
        // borderColor: 'red',
        borderRadius: 8,
        // display: 'flex',
        overflow: 'hidden',
        // backgroundColor: 'black'
        margin: 8,
    },
    cardContent: {
        // flex: 1,
        justifyContent: 'flex-end'
    },
    priceStockContainer: {
        // flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    priceText: {
        fontSize: 15,
        color: '#F94C10',
        paddingLeft: 8
    },
    stockText: {
        color: '#B9B4C7',
        fontWeight: '500',
        alignSelf: 'flex-end',
        padding: 5,
        backgroundColor: 'orange',
        borderBottomRightRadius: 8,
        color: 'white'
    },
    boldPrice: {
        fontWeight: 'bold',
        fontSize: 20
    },
    overlay: {
        position: 'absolute',
        // height: 32,
        top: 0,
        left: 0,
        bottom: 30,
        right: 0,
        borderBottomStartRadius: 8,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})