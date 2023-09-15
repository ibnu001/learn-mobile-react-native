import { useDispatch } from "react-redux"
import { showError, showLoading } from "../../store/AppAction"

export const ToDo = (service) => {
    const dispatch = useDispatch()
    const { getTodoService, addTodoService, deleteTodoService, updateTodoService } = service()

    const onLoadTodo = async () => {
        try {
            dispatch(showLoading(true))

            return await getTodoService()
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        };
    }

    const onSubmitTodo = async (newTodoName) => {
        try {
            dispatch(showLoading(true))

            return await addTodoService(newTodoName)
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        };
    }

    const onDeleteTodo = async (id) => {
        try {
            dispatch(showLoading(true))

            return await deleteTodoService(id)
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        };
    }

    const onUpdateTodo = async (payload) => {
        try {
            dispatch(showLoading(true))

            return await updateTodoService(payload)
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        };
    }

    return {
        onLoadTodo,
        onSubmitTodo,
        onDeleteTodo,
        onUpdateTodo
    };
};





