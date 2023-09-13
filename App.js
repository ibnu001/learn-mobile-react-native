import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/RootNavigator';
import configureStore from './src/store/Store';
import Loading from './src/shared/components/Loading';

const store = configureStore()

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container} >
                <AppNavigation />
                <Loading />
            </View>
        </Provider>
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
