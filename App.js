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
    TouchableOpacity
} from 'react-native';
import ExampleComponent from './src/component/ExampleComponent';
import ClassComponent from './src/component/ClassComponent';
import exampleStyle from "./src/component/ExampleStyle";

export default function App() {
    return (
        <View style={styles.container} >
        </View>
    )


    // return (
    //     <ScrollView>
    //         <View style={styles.container}>
    //             <Text>Hello, i'm on the wotah hahaha</Text>

    //             <ClassComponent />
    //             <ExampleComponent />
    //             <ExampleComponent />
    //             <Greeting />

    //             <Text style={[styles.titleText, exampleStyle.title]}>Contoh Title from ExampleStyle style Component</Text>
    //             <Text style={[styles.subTitle, exampleStyle.subTitle]}>Contoh SubTitle from ExampleStyle style Component</Text>

    //             <View style={{ alignSelf: 'center', marginTop: 15 }}>
    //                 <Text>Text Input</Text>
    //                 <TextInput style={{
    //                     borderWidth: 1,
    //                     paddingStart: 10,
    //                     width: 360,
    //                     height: 50,
    //                     borderRadius: 5,
    //                 }} placeholder='isi dari hati' />
    //             </View>

    //             <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/id/9/94/NarutoCoverTankobon1.jpg", width: 300, height: 600 }} />


    //             <TouchableOpacity
    //                 style={styles.button}
    //                 onPress={() => {
    //                     // Tindakan yang ingin Anda lakukan saat tombol ditekan
    //                     alert('Ini Jalan Ninja ku (￣y▽￣)╭ Ohohoho.....!');
    //                 }}
    //             >
    //                 <Image source={require('./assets/cover-manga-naruto.jpg')} />
    //             </TouchableOpacity>

    //             <StatusBar style="auto" backgroundColor='red' />
    //         </View>
    //     </ScrollView>
    // );
}

// const Greeting = () => {
//     return (
//         <View>
//             <Text>Ape lu liat liat tong?</Text>
//         </View>
//     )
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
