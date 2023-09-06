import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Hello = (props) => { // {} -> disebut destructuring
    // const fullname = props.fullname // bisa satu saya
    // const { fullname, company } = props // bisa banyak
    const fullname = props.fullname !== undefined ? props.fullname : 'Skipper' // membuat default value
    const company = props.company !== undefined ? props.company : 'PT. Penguin of Madagascar'
    
    return (
        <View style={[styles.backgroundSection]}>
            <Text>Hello Everyone, help me! {fullname} on underwotah from {company} and ape age {props.age}</Text>

            {props.children}
        </View>
    );
}


export default function Greetings() {
    const dataProfile = {
        fullname: 'Raipa',
        company: 'Apiar',
        age: 200
    }

    return (
        <View>
            {/* pemanggilan component siingle tag, (tanpa mengirimkan props children) */}
            <Hello {...dataProfile} />

            {/* ...dataProfile --> spread operator, mempermudah tanpa harus memasukan data nya satu per satu*/}
            <Hello {...dataProfile} > 
                <Text style={{ // text component ini sebagai props children
                    fontWeight: 'bold',
                    fontSize: 20,
                }}
                >Ini Ku kira Child taunya Children</Text>
            </Hello>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundSection: {
        borderWidth: 0.5,
        borderColor: 'red',
        margin: 7,
        padding: 4
    }
})