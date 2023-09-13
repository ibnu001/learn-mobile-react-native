import { SHOW_LOADING } from "../utils/Constant"

const showLoading = (isLoading) => {
    return {
        type: SHOW_LOADING,
        payload: isLoading
    }
}

export {
    showLoading
}