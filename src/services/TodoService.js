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

 
    return {
        getTodoService
    }
}

export default TodoService