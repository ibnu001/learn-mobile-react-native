import React, { Component } from "react";
import {Alert, Button, View, Text} from "react-native";

export default class ClassComponent extends Component {
    render() {
        return (
            <View>
                <Text
                    style={{
                        color: 'red',
                        fontSize:30
                    }}
                >Is this Class Component???</Text>
                <Button
                    title="Press You"
                    onPress={() => Alert.alert('Uhh I\'m being press')}
                />
            </View>
        )
    }
}