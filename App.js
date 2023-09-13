import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/RootNavigator';
import configureStore from './src/store/Store';
import Loading from './src/shared/components/Loading';
import DepProvider from './src/context/DependencyContext';
import apiClient from './src/services/ApiClient';


export default function App() {

    const store = configureStore()

    return (
        <SafeAreaView style={styles.container}>
            <Provider store={store}>
                <DepProvider services={{ apiClient: apiClient }}>
                    <AppNavigation />
                    <Loading />
                </DepProvider>
            </Provider>
        </SafeAreaView>
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
