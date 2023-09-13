import { ADD_TODO, CHANGE_TYPE, SET_TODO_NAME } from "../../utils/Constant"

const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

const changeType = (type) => {
    return {
        type: CHANGE_TYPE,
        payload: type
    }
}

function toggleComplete(todoIndex) {
    return {
        type: 'TOGGLE_COMPLETE',
        payload: todoIndex
    }
}

function deleteTodo(todoIndex) {
    return {
        type: 'DELETE_TODO',
        payload: todoIndex
    }
}

const setTodoName = (text) => {
    return {
        type: SET_TODO_NAME,
        payload: text
    }
}

export {
    addTodo,
    changeType, deleteTodo,
    setTodoName, toggleComplete
}