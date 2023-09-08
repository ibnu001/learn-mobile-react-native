import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabBarItem from '../../../shared/components/TabBarItem'

export default function TabBar(props) {
    return (
        <View style={styles.container}>

            <TabBarItem
                type={props.type}
                title={'All'}
                setType={() => props.setType('All')}
            />

            <TabBarItem
                type={props.type}
                title={'Active'}
                setType={() => props.setType('Active')}
            />

            <TabBarItem
                type={props.type}
                title={'Complete'}
                setType={() => props.setType('Complete')}
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