import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerSection: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    formSection: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
    },
    listSection: {
        flex: 4,
        borderWidth: 1,
        borderColor: 'blue',
    },
    tabBarSection: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'flex-end'
    },
})

export default styles