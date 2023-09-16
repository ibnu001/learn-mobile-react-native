import LoginReducer from "../../../src/store/login/LoginReducer";
import { LOGIN, LOGOUT } from "../../../src/utils/Constant";

describe('LoginReducer', () => {
    test('Login Type', () => {
        const action = {
            type : LOGIN
        }
        const result = LoginReducer(null, action)
        expect(result).toEqual({
            isLoggedIn: true
        })
    })

    test('Logout Type', () => {
        const action = {
            type : LOGOUT
        }
        const result = LoginReducer(null, action)
        expect(result).toEqual({
            isLoggedIn: false
        })
    })

    test('should return the initial state for unknown action', () => { 
        const unknownAction = {
            type: 'UNKOWN_ACTION_TYPE'
        }

        const result = LoginReducer(undefined, unknownAction)
        expect(result).toEqual({
            isLoggedIn: false
        })
     })

    // it('should return the initial state for unknown action', () => {
    //     // Definisikan action yang tidak dikenali
    //     const unknownAction = {
    //       type: 'UNKNOWN_ACTION_TYPE',
    //     };
    
    //     // Panggil reducer dengan action yang tidak dikenali
    //     const newState = LoginReducer(undefined, unknownAction);
    
    //     // Periksa apakah newState sama dengan initialState
    //     expect(newState).toEqual({
    //       isLoggedIn: false,
    //     });
    //   });

    // test('Default Type', () => {
    //     const action = {
    //         type : LOGIN
    //     }
    //     const result = LoginReducer(null, action)
    //     expect(result).toEqual({
    //         isLoggedIn: true
    //     })
    // })

});