import { StyleSheet } from "react-native";

const todoStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        paddingBottom: 16,
        paddingVertical: 8,

        // shadow
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 3,
            height: 3,
        }
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
    },
    todoComplete: {
        textDecorationLine: 'line-through'
    },
})

export default todoStyle