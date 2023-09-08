import { SectionList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProductForm from './ProductForm'

export const initialProducts = [
    {
        category: 'Makanan', // ini tidak masalah klo bkn title / category
        data: [ // wajib menulis 'data' tidak bisa yang lain
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
            {
                name: 'Nasi Goyeng',
                price: 150000
            },
            {
                name: 'Ayam Goyeng',
                price: 200000
            },
        ]
    },
    {
        category: 'Minuman',
        data: [
            {
                name: 'Teh Manis Dingin Anget',
                price: 85000
            },
            {
                name: 'Jus Jusan',
                price: 95000
            },
        ]
    },
    {
        category: 'Minuman Bersoda',
        data: [
            {
                name: 'Spirit',
                price: 90000
            },
            {
                name: 'Coola',
                price: 80200
            },
            {
                name: 'Fantastis',
                price: 92291
            },
        ]
    },
]


export default function ProductSectionList() {

    const [products, setProducts] = useState(initialProducts)
    const [showAddProduct, setShowAddProduct] = useState(false)
    const [category, setCategory] = useState('Makanan')

    const handleAddProduct = (newProduct) => {
        const updatedProducts = [...products]
        const categoryIndex = updatedProducts.findIndex(
            category => category.category === newProduct.category
        )

        if (categoryIndex !== -1) {
            updatedProducts[categoryIndex].data.push(...newProduct.data)
        } else {
            updatedProducts.push(newProduct)
        }

        setProducts(updatedProducts)
        setShowAddProduct(false)
    }

    const filteredProducts = products.filter(
        (product) => product.category === category
    )

    setActiveButton = (currentCategory) => {
        return category === currentCategory
            ? { backgroundColor: 'black' }
            : { backgroundColor: '#dfdfdf' }
    }

    // console.log('products: ', products);
    // npm i react-native-dropdown-picker

    return (
        <View style={styles.container}>

            {showAddProduct ? (
                <ProductForm
                    onAddProduct={handleAddProduct}
                    onCancel={() => setShowAddProduct(false)} />
            ) : (
                <View style={styles.container}>
                    <View style={styles.headerSection}>
                        <ScrollView horizontal={true} contentContainerStyle={styles.scrollHeader} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={[styles.btn, { backgroundColor: '#141E46', borderRadius: 8 }]} onPress={() => setShowAddProduct(true)}>
                                <Text style={styles.btnText}>Tambah Product</Text>
                            </TouchableOpacity>

                            <View style={{ borderRightColor: '#D8D9DA', borderRightWidth: 4, borderRadius: 16, marginRight: 16 }}></View>

                            <TouchableOpacity
                                onPress={() => setCategory('Makanan')}
                                style={[
                                    styles.btn,
                                    setActiveButton('Makanan')
                                ]}
                            >
                                <Text style={styles.btnText}>Makanan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setCategory('Minuman')}
                                style={[
                                    styles.btn,
                                    setActiveButton('Minuman')
                                ]}
                            >
                                <Text style={styles.btnText}>Minuman</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setCategory('Minuman Bersoda')}
                                style={[
                                    styles.btn,
                                    setActiveButton('Minuman Bersoda')
                                ]}
                            >
                                <Text style={styles.btnText}>Minuman Bersoda</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>


                    <View style={{ flex: 1 }}>
                        
                        <SectionList
                            sections={filteredProducts}
                            renderItem={({ item }) =>
                                <View style={styles.card}>
                                    <Text style={styles.name}>Product : {item.name}</Text>
                                    <Text style={styles.price}>Price      : {item.price}</Text>
                                </View>
                            }
                            renderSectionHeader={({ section: { category } }) => (
                                <View style={[styles.card, { alignItems: 'center', backgroundColor: 'grey', marginBottom: 16 }]}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{category}</Text>
                                </View>
                            )}
                            // contentContainerStyle={{ marginBottom: 15 }} // untuk menambah padding di bawah pada list scroll view
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#ededed',
        padding: 16,
        margin: 8,
        marginBottom: 0,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    headerSection: {
        backgroundColor: 'white',
        marginBottom: 16
    },
    scrollHeader: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginRight: 8,
    },
    btn: {
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginRight: 16,
        backgroundColor: 'grey'
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        marginTop: 8
    }
})