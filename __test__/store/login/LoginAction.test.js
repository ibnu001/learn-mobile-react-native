import { loginAction, logoutAction } from "../../../src/store/login/LoginAction";
import { LOGIN, LOGOUT } from "../../../src/utils/Constant";

describe('LoginAction', () => {
    test('Login Action return object with type property is LOGIN constant', () => {
        const action = loginAction()
        expect(action).toEqual({
            type: LOGIN
        })
    })

    test('Logout Action return object with type property is LOGOUT constant', () => {
        const action = logoutAction()
        expect(action).toEqual({
            type: LOGOUT
        })
    })
});