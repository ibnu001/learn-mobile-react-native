import { LOGIN, LOGOUT } from "../../utils/Constant";

function login(isLogin) {
    return {
        type: LOGIN,
        payload: isLogin
    }
}

function logout(isLogout) {
    return {
        type: LOGOUT,
        payload: isLogout
    }
}

export {
    login,
    logout,
}