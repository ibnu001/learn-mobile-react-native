import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

export default function ProductForm({ onCancel, onAddProduct }) {

    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [nameError, setNameError] = useState('')
    const [priceError, setPriceError] = useState('')

    // Dropdown
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        { label: 'Makanan', value: 'Makanan' },
        { label: 'Minuman', value: 'Minuman' },
        { label: 'Minuman Bersoda', value: 'Minuman Bersoda' },
    ])

    console.log(value);

    const handleAddProduct = () => {
        if (name.trim() === '' || price.trim() === '') {
            Alert.alert('Error', 'Name and Price cannot blank')
        } else if (name.length < 3 || name.length > 50) {
            setNameError('Product name must have 3 - 50 character')
        } else if (parseFloat(price) < 1) {
            setPriceError('Price cannot minus')
        } else {
            // setCategory(value)
            // console.log(category);

            const newProduct = {
                category,
                data: [{ name, price }]
            }
            console.log(newProduct);

            onAddProduct(newProduct)
            setCategory('')
            setName('')
            setPrice('')
        }
    }

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return (
                <Text style={{ color: 'red', marginBottom: 8 }}>{errorValidation}</Text>
            )
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.logoSection}>

                <Image style={styles.image}
                    source={require('../../assets/Tamago-fall.gif')}
                />

            </View>

            <View style={{
                flex: 4,
                // borderWidth: 3,
                // borderColor: 'black'
            }}>
                <View style={styles.form}>
                    <View style={styles.headerForm}>

                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tambah Data Product</Text>

                        <View>

                            {/* <Text style={styles.label}>Category</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(val) => setCategory(val)}
                                value={category}
                            /> */}

                            <DropDownPicker
                                style={[styles.input]}
                                placeholder='Select category'
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={(val) => { setCategory(val), setValue(val) }}
                                setItems={setItems}
                            />

                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(val) => {
                                    setName(val)
                                    setNameError('')
                                }}
                                value={name}
                            />
                            {isErrorView(nameError)}

                            <Text style={styles.label}>Price</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={(val) => {
                                    setPrice(val)
                                    setPriceError('')
                                }}
                                value={price}
                            />
                            {isErrorView(priceError)}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 8 }}>

                                <TouchableOpacity
                                    style={[styles.btn, { backgroundColor: '#952323' }]}
                                    onPress={onCancel}
                                >
                                    <Text style={{ color: 'white' }}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => handleAddProduct()}
                                >
                                    <Text style={{ color: 'white' }}>Add</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoSection: {
        flex: 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        borderRadius: 8,
        // aspectRatio: 1,
        borderWidth: 2,
        borderColor: '#95b6db',
    },
    image: {
        flex: 1,
        aspectRatio: 1.41,
    },
    form: {
        backgroundColor: '#e2ebf5',
        padding: 24,
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 2,
        borderColor: '#95b6db',
    },
    headerForm: {
        // alignItems: 'center'
    },
    label: {
        fontSize: 16,
        fontWeight: 'black',
        marginBottom: 8
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#233d90',
        marginHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
    }
})