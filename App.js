import { StyleSheet, View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen/TodoScreen';

export default function App() {
    return (
        <View style={styles.container} >
            <TodoScreen />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 35,
        padding: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
    },
});
