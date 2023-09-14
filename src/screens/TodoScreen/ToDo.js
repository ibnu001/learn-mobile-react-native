import { useDispatch } from "react-redux"
import { showError, showLoading } from "../../store/AppAction"

export const ToDo = (service) => {
    const dispatch = useDispatch()
    const { getTodoService } = service()

    const onLoadTodo = async () => {
        try {
            dispatch(showLoading(true))

            return await getTodoService()
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        }
    }

    return {
        onLoadTodo
    }
}