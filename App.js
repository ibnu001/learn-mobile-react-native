import { StyleSheet, View } from 'react-native';
import SplasScreen from './src/screens/SplasScreen/SplasScreen';
import AppNavigation from './src/navigation/RootNavigator';

export default function App() {
    return (
        <View style={styles.container} >
            {/* <TodoScreen /> */}
            {/* <SplasScreen /> */}
            <AppNavigation />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 35,
        // padding: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
});
