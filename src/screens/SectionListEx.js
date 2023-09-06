import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

const product = [
  {
    category: 'Makanan',
    data: [
      {
        name: 'Ayam Bakar',
        price: 25000
      },
      {
        name: 'Ayam Goreng',
        price: 100000
      },
    ]
  },
  {
    category: 'Minuman',
    data: [
      {
        name: 'Teh Manis, maksudnya eneng nya',
        price: 8000000
      },
    ]
  }
]

export default function SectionListEx() {
  return (
    <View>
      <SectionList
        sections={product}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={styles.sectionHeader}>{category}</Text>
        )}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
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
})