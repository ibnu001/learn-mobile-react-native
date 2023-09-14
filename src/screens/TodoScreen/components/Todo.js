import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import TodoButton from '../../../shared/components/TodoButton'
import { deleteTodo, toggleComplete } from '../../../store/todo/TodoAction'
import todoStyle from './Todo.style'

export default function Todo({ todo }) {

    const dispatch = useDispatch()

    const onTodoComplete = (id) => {
        dispatch(toggleComplete(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <View style={todoStyle.container}>
            <Text
                style={[
                    todoStyle.text,
                    todo.isCompleted ? todoStyle.todoComplete : null
                ]}
            >
                {todo.name}
            </Text>

            <View style={todoStyle.buttonWrapper}>

                <TodoButton
                    nameIcon={'checkmark-done-circle-outline'}
                    onPress={() => onTodoComplete(todo.id)}
                    colorIcon={'green'}
                />

                <TodoButton
                    nameIcon={'close-circle-outline'}
                    onPress={() => onDeleteTodo(todo.id)}
                    colorIcon={'red'}
                />

            </View>
        </View>
    )
}
