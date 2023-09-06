import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ExampleList() {

    const cars = [
        {
            name: 'Camry',
            brand: 'Suzuki'
        },
        {
            name: 'John',
            brand: 'Toyota'
        },
        {
            name: 'Ibnu',
            brand: 'Honda Civic'
        },
        {
            name: 'Ibnu V2',
            brand: 'Honda Civic'
        },
        {
            name: 'Al Fath',
            brand: 'BWM'
        },
    ]

    const brands = [
        'Suzuki',
        'Honda',
        'Toyota',
        'Hyundai',
        'Porche',
        'Nissan',
    ]

    // const listBrandWithKey = brands.map((brand, key) => { // gunain kurung kurawal WAJIB RETURN
    //     return (<Text style={styles.brand}>{key + 1}. {brand}</Text>)
    // })

    // tanpa kurung kurawal TIDAK PAKAI RETURN
    const listBrandWithKey = brands.map((brand, key) =>
        <Text style={styles.brand}>{key + 1}. {brand}</Text>
    )

    const filterCars = cars.filter(car => car.brand === 'Honda Civic')
    const showFilter = filterCars.map((car, i) => (
        <View key={i} style={styles.carBrand}>
            <Text>Name : {car.name}</Text>
            <Text>Brand : {car.brand}</Text>
        </View>
    ))

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 8 }}>List of Brand</Text>

            {/* {listBrandWithKey}

            <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 24}}>Is This Your Car? （￣︶￣）↗</Text>
            {showFilter} */}

            {/* <FlatList
                data={cars}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumn={2}
            /> */}

            {/* <Text>Contoh FlatList</Text>
            <FlatList data={cars}
                // keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            /> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    brand: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '400'
    },
    carBrand: {
        // height: 90,
        // width: 90,
        // flexGrow: 1,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'blueviolet',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8
    }
})