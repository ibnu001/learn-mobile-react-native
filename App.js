import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    Button,
    Alert,
    TouchableOpacity,
    YellowBox
} from 'react-native';
import ExampleComponent from './src/component/ExampleComponent';
import ClassComponent from './src/component/ClassComponent';
import exampleStyle from "./src/component/ExampleStyle";

export default function App() {
    return (
        <>
            <View style={styles.header}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20
                }}>Belajar Hahh </Text>
            </View>

            <View style={styles.container}>

                <View style={[{ backgroundColor: 'blue' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'yellow' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'red' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'brown' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'grey' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'green' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'blueviolet' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'red' }, styles.box]}></View>

                <StatusBar style='auto' />
            </View>

            <View style={styles.navBotBar}>
                <View style={[{ backgroundColor: 'blue' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'yellow' }, styles.box]}></View>
                <View style={[{ backgroundColor: 'red' }, styles.box]}></View>
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    header: {
        flex: 2,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container: {
        padding: 30,
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        maxHeight: 500
    },
    box: {
        width: 100,
        height: 100,
        marginHorizontal: 4,
        marginVertical: 4,
        borderRadius: 10
    },
    navBotBar: {
        flex:0, 
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
});
