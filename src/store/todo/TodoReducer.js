import { ADD_TODO, CHANGE_TYPE, DELETE_TODO, SET_TODO_NAME, TOGGLE_COMPLETE } from "../../utils/Constant"

const initialState = {
    newTodoName: '',
    todos: [
        { id: 1, title: 'Olahraga', complete: true },
        { id: 2, title: 'Ngobar', complete: false },
        { id: 3, title: 'Ngompor', complete: true },
    ],
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
        default:
            return state
    }
}

export default TodoReducer
