import { useDeps } from "../context/DependencyContext"
import LocalStorage from "../utils/LocalStorage"

const LoginService = () => {

    const { apiClient } = useDeps()

    const login = async (email, password) => {
        try {
            // console.log('=== LoginService Email, Password: ', email, password);
            const data = await apiClient({
                method: 'post',
                url: '/auth/login',
                params: {
                    email: email,
                    password: password
                },
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            })

            // console.log('LoginService');

            // console.log('===Login Service Data: ', data);

            await LocalStorage().setData('token', data)
        } catch (e) {
            throw e
        }
    }

    return {
        login
    }
}

export default LoginService