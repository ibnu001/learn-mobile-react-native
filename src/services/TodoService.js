import { useDeps } from '../context/DependencyContext'

const TodoService = () => {
    const { apiClient } = useDeps()

    const getTodoService = async () => {
        try {
            return await apiClient({
                url: "/todos",
                method: "get"
            })
        } catch (error) {
            throw error
        }
    }

    const addTodoService = async (newTodoName) => {
        try {
            return await apiClient({
                url: "/todos",
                method: "post",
                params: {
                    name: newTodoName
                }
            })
        } catch (error) {
            throw error
        }
    }

    const deleteTodoService = async (id) => {
        try {
            return await apiClient({
                url: `/todos/${id}`,
                method: "delete",
            })
        } catch (error) {
            throw error
        }
    }

    const updateTodoService = async (payload) => {
        try {
            return await apiClient({
                url: '/todos',
                method: "put",
                params: payload
            })
        } catch (error) {
            throw error
        }
    }


    return {
        getTodoService,
        addTodoService,
        deleteTodoService,
        updateTodoService
    }
}

export default TodoService