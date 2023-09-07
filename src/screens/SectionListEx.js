import { TouchableOpacity, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProductDummy from '../utils/ProductDummy'
import ProductCard from '../component/ProductCard'

// const product = [
//   {
//     name: 'Ayam Bakar',
//     category: 'Makanan',
//     price: 25000
//   },
//   {
//     name: 'Ayam Goreng',
//     category: 'Makanan',
//     price: 100000
//   },
//   {
//     name: 'Teh Manis, maksudnya eneng nya',
//     category: 'Minuman',
//     price: 8000000
//   },
// ]

// const product = [
//   {
//     category: 'Makanan',
//     data: [
//       {
//         name: 'Ayam Bakar',
//         price: 25000
//       },
//       {
//         name: 'Ayam Goreng',
//         price: 100000
//       },
//     ]
//   },
//   {
//     category: 'Minuman',
//     data: [
//       {
//         name: 'Teh Manis, maksudnya eneng nya',
//         price: 8000000
//       },
//     ]
//   }
// ]

export default function SectionListEx() {

  const [selectedCategory, setSelectedCategory] = useState('Makanan')

  const groupedProducts = ProductDummy.reduce((emptObj, product) => {
    if (!emptObj[product.category]) {
      emptObj[product.category] = []
    }

    emptObj[product.category].push(product)
    return emptObj
  }, {})

  const section = Object.keys(groupedProducts).map((category) => ({
    title: category,
    data: groupedProducts[category]
  }))

  const filteredSection = section.filter(
    (section) => section.title === selectedCategory
  )

  return (
    <View style={styles.container}>

      {/* section button/ header */}
      <View style={styles.headerSection}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory('Makanan')}
        >
          <Text>Makanan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory('Minuman')}
        >
          <Text>Minuman</Text>
        </TouchableOpacity>

      </View>

      {/* show list by selected button */}
      <View style={{flex: 1}}>
        <SectionList
          sections={filteredSection}
          renderItem={({ item }) => {
            return (
              <ProductCard product={item}/>
              // <View style={styles.item}>
              //   <Text>{item.name}</Text>
              //   <Text>{item.price}</Text>
              // </View>
            )
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
    // marginBottom: 80
  },
  sectionHeader: {
    marginTop: 8,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4
  },
  btn: {
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    borderRadius: 9,
    padding: 8
  }
})