import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDummy from '../utils/ProductDummy'

const data = [
    {
        brand: 'Honda',
        data: ['Brio', 'Civic', 'Mobilio']
    },
    {
        brand: 'Toyota',
        data: ['Brio', 'Civic', 'Mobilio']
    },
    {
        brand: 'Hyundai',
        data: ['Brio', 'Civic', 'Mobilio']
    },
    {
        brand: 'Yamaha',
        data: ['Brio', 'Civic', 'Mobilio']
    },
]

export default function SectionListExample() {

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.brand}</Text>
                )}
            />
        </View>
    );



    // return (
    //     <View style={styles.container}>
    //         <SectionList
    //             sections={ProductDummy}
    //             renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    //             renderSectionHeader={({section}) => (
    //                 <Text style={styles.sectionHeader}>{section.category}</Text>
    //             )}
    //         />
    //     </View>
    // )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
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