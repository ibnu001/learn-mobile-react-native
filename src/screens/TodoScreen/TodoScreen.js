import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import TodoList from './TodoList'
import styles from './TodoScreen.style'
import TabBar from './components/TabBar'

const todoDummy = [
    { id: 1, title: 'Olahraga', complete: false },
    { id: 2, title: 'Ngobar', complete: true },
    { id: 3, title: 'Ngompor', complete: false },
]

export default function TodoScreen() {

    const [appState, setAppState] = useState({
        type: 'All',
        todos: [...todoDummy],
        inputValue: ''
    })

    const setType = (type) => {
        setAppState({ ...appState, type })
    }

    const toggleComplete = (todoIndex) => {
        const { todos } = appState
        todos.forEach((todo) => {
            if (todo.id === todoIndex) {
                todo.complete = !todo.complete
            }
        })

        setAppState({ ...appState, todos })
    }

    const deleteTodo = (todoIndex) => {
        const { todos: currentTodos } = appState
        const newTodos = currentTodos.filter((todo) => todo.id !== todoIndex)
        setAppState({ ...appState, todos: newTodos })
    }

    const submitTodo = () => {
        const payload = {
            title: appState.inputValue,
            complete: false,
            id: appState.todos.length + 1,
        }

        const todos = [...appState.todos, payload]
        setAppState({ ...appState, todos, inputValue: "" })
    }

    const onChangeValue = (val) => {
        setAppState({ ...appState, inputValue: val })
    }


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
                    value={appState.inputValue}
                    onChangeText={onChangeValue}
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 5,
                    }}
                />

                <Button title='Submit' onPress={submitTodo} />
            </View>

            {/* List */}
            <View style={styles.listSection}>
                {/* <Text style={{ textAlign: 'center', fontSize: 52 }}>List</Text> */}
                <TodoList
                    todos={appState.todos}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    type={appState.type}
                />
            </View>

            {/* TabBar */}
            <View style={styles.tabBarSection}>
                {/* <Text style={{ textAlign: 'center', fontSize: 52 }}>Tab Bar</Text> */}
                <TabBar type={appState.type} setType={setType} />
            </View>

        </View>
    )
}

