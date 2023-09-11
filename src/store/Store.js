import { combineReducers, createStore } from "redux";
import TodoReducer from './todo/TodoReducer';

const rootReducer = combineReducers({
    TodoReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore