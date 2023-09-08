import React from 'react'
import { Text, View } from 'react-native'
import TodoButton from '../../../shared/components/TodoButton'
import todoStyle from './Todo.style'

export default function Todo({ todo, toggleComplete, deleteTodo }) {

    return (
        <View style={todoStyle.container}>
            <Text
                style={[
                    todoStyle.text,
                    todo.complete ? todoStyle.todoComplete : null
                ]}
            >
                {todo.title}
            </Text>

            <View style={todoStyle.buttonWrapper}>

                <TodoButton
                    nameIcon={'checkmark-done-circle-outline'}
                    onPress={() => toggleComplete(todo.id)}
                    colorIcon={'green'}
                />

                <TodoButton
                    nameIcon={'close-circle-outline'}
                    onPress={() => deleteTodo(todo.id)}
                    colorIcon={'red'}
                />

            </View>

        </View>
    )
}
