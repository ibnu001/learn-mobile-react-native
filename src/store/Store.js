import { combineReducers, createStore } from "redux";
import TodoReducer from './todo/TodoReducer';
import LoginReducer from "./login/LoginReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
    TodoReducer,
    LoginReducer,
    AppReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore