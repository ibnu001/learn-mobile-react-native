import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Todo from './Todo'

export default function TodoList() {
    // const { todos, toggleComplete, deleteTodo, type } = props

    const todos = useSelector((state) => state.TodoReducer.todos)
    const todoType = useSelector((state) => state.TodoReducer.type)

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((todo) => todo.complete)
            case 'Active':
                return todos.filter((todo) => !todo.complete)
        }
    }

    const selectedTodos = getVisibleTodos(todos, todoType)

    return (
        <FlatList
            data={selectedTodos}
            renderItem={({ item }) => (
                <Todo
                    todo={item}
                // toggleComplete={toggleComplete}
                // deleteTodo={deleteTodo}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => <Text>Data Kosong</Text>}
        />
    )
}

const styles = StyleSheet.create({})