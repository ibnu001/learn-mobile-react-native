import { useDispatch } from "react-redux"
import { showError, showLoading } from "../../store/AppAction"
import { onNavigate } from "../../navigation/RootNavigation"
import PATH from '../../navigation/NavigationPath'

export const Login = (service) => {
    const dispatch = useDispatch()
    const { login } = service()

    // console.log('=== Login: === ', service());

    const onAuthenticate = async (email, password) => {
        try {
            // console.log('lalalalilili');
            dispatch(showLoading(true))
            // console.log('=== Login.js Email, Password: ', email, password);
            await login(email, password)
            dispatch(login())

            console.log('lalalalala');

            onNavigate({
                routeName: PATH.TODO_SCREEN,
                isReplace: true
            })
            
        } catch (e) {
            dispatch(showError(e))
        } finally {
            dispatch(showLoading(false))
        }
    }

    // console.log('lalala');

    const onDismissError = () => dispatch(showError(''))

    return {
        onAuthenticate,
        onDismissError
    }
}