import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    },
    headerSection: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    formSection: {
        flex: 0.5,
        flexDirection: 'row',
        paddingVertical: 8,
        // borderWidth: 1,
        // borderColor: 'green',
    },
    listSection: {
        flex: 4,
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    tabBarSection: {
        flex: 1,
        justifyContent: 'flex-end'
        // borderWidth: 1,
        // borderColor: 'black',
    },
})

export default styles