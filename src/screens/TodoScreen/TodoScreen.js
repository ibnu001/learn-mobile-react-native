import React from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, setTodoName } from '../../store/todo/TodoAction'
import styles from './TodoScreen.style'
import TabBar from './components/TabBar'
import TodoList from './components/TodoList'

// const todoDummy = [
//     { id: 1, title: 'Olahraga', complete: false },
//     { id: 2, title: 'Ngobar', complete: true },
//     { id: 3, title: 'Ngompor', complete: false },
// ]

export default function TodoScreen() {

    const dispatch = useDispatch()
    const todoName = useSelector((state) => state.TodoReducer.newTodoName)

    let currentId = useSelector((state) => {
        let maxId = 0
        state.TodoReducer.todos.forEach(todo => {
            if (todo.id > maxId) {
                maxId = todo.id
            }
        })
        return maxId
    })

    const onSetTodoName = (val) => {
        dispatch(setTodoName(val))
    }

    const submitTodo = () => {
        const trimInput = todoName.trim()
        if (trimInput === "" || todoName.length < 4) {
            Alert.alert('Invalid Input', 'Please Correct input')
        } else {
            const payload = {
                title: todoName,
                complete: false,
                id: currentId + 1,
            }
            dispatch(addTodo(payload))
        }
        // const todos = [...appState.todos, payload]
        // setAppState({ ...appState, todos, inputValue: "" })
    }

    // const [appState, setAppState] = useState({
    //     type: 'All',
    //     todos: [...todoDummy],
    //     inputValue: ''
    // })

    // const setType = (type) => {
    //     setAppState({ ...appState, type })
    // }

    // const toggleComplete = (todoIndex) => {
    //     const { todos } = appState
    //     todos.forEach((todo) => {
    //         if (todo.id === todoIndex) {
    //             todo.complete = !todo.complete
    //         }
    //     })

    //     setAppState({ ...appState, todos })
    // }

    // const deleteTodo = (todoIndex) => {
    //     const { todos: currentTodos } = appState
    //     const newTodos = currentTodos.filter((todo) => todo.id !== todoIndex)
    //     setAppState({ ...appState, todos: newTodos })
    // }

    // const onChangeValue = (val) => {
    //     setAppState({ ...appState, inputValue: val })
    // }


    return (
        <View style={styles.container}>

            {/* Heading */}
            <View style={styles.headerSection}>
                <Text style={{ textAlign: 'center', fontSize: 52 }}>Todos</Text>
            </View>

            {/* Form Add List */}
            <View style={styles.formSection}>
                {/* <Text style={{ textAlign: 'center', fontSize: 52 }}>Form</Text> */}
                <TextInput
                    placeholder='New Todo'
                    value={todoName}
                    onChangeText={onSetTodoName}
                    style={{
                        flex: 2,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 8,
                        marginRight: 8
                    }}
                />

                <TouchableOpacity onPress={submitTodo}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: 'grey'
                    }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>

            {/* List */}
            <View style={styles.listSection}>
                {/* <Text style={{ textAlign: 'center', fontSize: 52 }}>List</Text> */}
                {/* <TodoList
                    todos={appState.todos}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    type={appState.type}
                /> */}
                <TodoList />
            </View>

            {/* TabBar */}
            <View style={styles.tabBarSection}>
                {/* <Text style={{ textAlign: 'center', fontSize: 52 }}>Tab Bar</Text> */}
                {/* <TabBar type={appState.type} setType={setType} /> */}
                <TabBar />
            </View>

        </View>
    )
}

