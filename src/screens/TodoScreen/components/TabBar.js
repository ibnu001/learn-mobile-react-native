import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabBarItem from '../../../shared/components/TabBarItem'

export default function TabBar() {
    return (
        <View style={styles.container}>

            <TabBarItem
                title={'All'}
            // type={props.type}
            // setType={() => props.setType('All')}
            />

            <TabBarItem
                title={'Active'}
            // type={props.type}
            // setType={() => props.setType('Active')}
            />

            <TabBarItem
                title={'Complete'}
            // type={props.type}
            // setType={() => props.setType('Complete')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'grey',
        // justifyContent: 'space-evenly'
    }
})