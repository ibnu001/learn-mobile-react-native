import React, { useEffect, useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTodo, setTodos } from '../../store/todo/TodoAction'
import styles from './TodoScreen.style'
import TabBar from './components/TabBar'
import TodoList from './components/TodoList'

export default function TodoScreen({ todo }) {
    const { onLoadTodo, onSubmitTodo, onDeleteTodo, onUpdateTodo } = todo()
    const dispatch = useDispatch()
    const [newTodoName, setNewTodoName] = useState("")

    const onSetTodoName = (val) => {
        setNewTodoName(val)
    }

    const loadDataTodo = async () => {
        const todos = await onLoadTodo()
        dispatch(setTodos(todos.data.data))
    }

    useEffect(() => {
        loadDataTodo()
    }, [])

    // const todoName = useSelector((state) => state.TodoReducer.newTodoName)

    // let currentId = useSelector((state) => {
    //     let maxId = 0
    //     state.TodoReducer.todos.forEach(todo => {
    //         if (todo.id > maxId) {
    //             maxId = todo.id
    //         }
    //     })
    //     return maxId
    // })

    // const onSetTodoName = (val) => {
    //     dispatch(setTodoName(val))
    // }

    const submitTodo = async () => {
        const trimInput = newTodoName.trim()

        if (trimInput === "" || newTodoName.length < 4) {
            Alert.alert('Invalid Input', 'Please Correct input')
        } else {
            await onSubmitTodo(newTodoName)
            loadDataTodo()
            setNewTodoName('')
            // const payload = {
            //     title: todoName,
            //     complete: false,
            //     id: currentId + 1,
            // }
            // dispatch(addTodo(payload))
        }
    }

    const deleteTodo = async (id) => {
        await onDeleteTodo(id)

        loadDataTodo()
    }

    const updateTodo = async (payload) => {
        await onUpdateTodo(payload)

        loadDataTodo()
    }

    return (
        <View style={styles.container}>

            {/* Heading */}
            <View style={styles.headerSection}>
                <Text style={{ textAlign: 'center', fontSize: 52 }}>Todos</Text>
            </View>

            {/* Form Add List */}
            <View style={styles.formSection}>
                <TextInput
                    placeholder='New Todo'
                    value={newTodoName}
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
                <TodoList deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </View>

            {/* TabBar */}
            <View style={styles.tabBarSection}>
                <TabBar />
            </View>

        </View>
    )
}

