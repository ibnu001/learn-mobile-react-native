import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../component/Card'

export default function FlashSale() {

    const cardData = Array.from({ length: 100 }, (_, index) => index);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'orange', fontWeight: '800' }}>Flash{" "}
                    <Text style={{ color: 'red', fontWeight: '500' }}>Sale</Text>
                </Text>
            </View>

            <View>
                <ScrollView
                    horizontal={true}
                    style={styles.cardSection}
                    showsHorizontalScrollIndicator={false}
                >

                    {/* {cardData.map((item, index) => ( */}
                    {/* <Card price={25000} stock={15} key={index}> */}
                    <Card price={25000} stock={0} discount={60}>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/cover-manga-naruto.jpg')}
                        />
                    </Card>
                    {/* ))} */}

                    <Card price={15000} stock={25} discount={80}>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/cover-naruto-01.jpg')}
                        />
                    </Card>

                    <Card price={35000} stock={35} discount={100}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: 'https://i.pinimg.com/736x/04/64/e8/0464e8529a62de67d237d65194af84a4.jpg'
                            }}
                        />
                    </Card>

                    <Card price={243000} stock={30} discount={30}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: 'https://2.bp.blogspot.com/-MjOI3FnMasg/T6uBDqLMcAI/AAAAAAAAAQY/T0H_N1zTnxc/s1600/Volume01Cover.jpg'
                            }}
                        />
                    </Card>

                    {/* <Card>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/cover-manga-naruto.jpg')}
                        />
                    </Card> */}

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 32
    },
    cardSection: {
        // height: 190,
        display: 'flex',
        padding: 2,
        flexDirection: 'row',
    },
    cardImage: {
        height: 220,
        width: '100%',
        objectFit: 'cover',
        // borderWidth: 1,
        // borderColor: 'blue',
    },
})