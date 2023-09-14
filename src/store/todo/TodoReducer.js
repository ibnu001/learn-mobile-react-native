import { ADD_TODO, CHANGE_TYPE, DELETE_TODO, SET_TODOS, SET_TODO_NAME, TOGGLE_COMPLETE } from "../../utils/Constant"

const initialState = {
    newTodoName: '',
    todos: [],
    type: 'All'
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, // spread operator --> fungsinya menyalin data
                newTodoName: '',
                todos: [...state.todos, action.payload],
            }
        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload // action.payload nya --> action.title 
            }
        case SET_TODO_NAME:
            return {
                ...state,
                newTodoName: action.payload
            }
        case DELETE_TODO:
            let filteredTodos = state.todos.filter((todo) => todo.id != action.payload)
            return {
                ...state,
                todos: filteredTodos
            }
        case TOGGLE_COMPLETE:
            let todos = [...state.todos]
            todos.forEach(todo => {
                if (todo.id == action.payload) {
                    todo.complete = true
                }
            })
            return {
                ...state,
                todos: todos
            }
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}

export default TodoReducer
