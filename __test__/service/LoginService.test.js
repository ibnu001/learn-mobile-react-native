// import LoginService from '' => idak boleh import method atau object lain, 
// kecuali kebutuhan mocking library dan lain-lain
// harus terisolasi

import { useDeps } from "../../src/context/DependencyContext";
import LoginService from "../../src/services/LoginService";


// test('two plu two is four', () => {
//     expect(2 + 2).toBe(4)
// })

const mockSetData = jest.fn()
const mockApiClient = jest.fn()

jest.mock('../../src/context/DependencyContext', () => ({
    useDeps: jest.fn().mockReturnValue({ // return sebuah value, object, array, atau yang lainnya: NON PROMISE
        apiClient: jest.fn().mockResolvedValue({ // return resolved, apiClient Promise() object
            data: {
                data: {
                    token: 'token123'
                }
            }
        })
        // apiClient: mockApiClient
    })
}))

jest.mock('../../src/utils/LocalStorage', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        setData: mockSetData
    }))
}))

// it('should return token', async () => {
//     const email = 'admin@gmail.com'
//     const password = 'terbebas'

//     await LoginService().login(email, password)

//     expect(useDeps().apiClient).toHaveBeenCalledWith({
//         method: "post",
//         url: "/users/login",
//         params: {
//             email: email,
//             password: password
//         },
//     })

//     expect(mockSetData).toHaveBeenCalledWith('token', 'token123')
// });

describe('LoginService', () => {
    test('should return token', async () => {
        const email = 'admin@gmail.com'
        const password = 'terbebas'

        // mockApiClient.mockResolvedValue({
        //     data: {
        //         data: {
        //             token: 'token123'
        //         }
        //     }
        // })

        await LoginService().login(email, password)

        expect(useDeps().apiClient).toHaveBeenCalledWith({
            method: "post",
            url: "/users/login",
            params: {
                email: email,
                password: password
            },
        })

        expect(mockSetData).toHaveBeenCalledWith('token', 'token123')
    })

    // test('login with incorrect email should throw an error', async () => {
    //     const email = 'admin@gmail.com'
    //     const password = 'terbebas'
    //     const errorMsg = 'Email or Password is incorrect'

    //     mockApiClient.mockResolvedValue({
    //         data: {
    //             data: {
    //                 token: 'token123'
    //             }
    //         }
    //     })

    //     useDeps().apiClient.mockRejectedValue(new Error(errorMsg))

    //     try {
    //         await LoginService().login(email, password)
    //     } catch (error) {
    //         expect(error.message).toBe(errorMsg)
    //     }

    //     expect(useDeps().apiClient).toHaveBeenCalledWith({
    //         method: "post",
    //         url: "/users/login",
    //         params: {
    //             email: email,
    //             password: password
    //         },
    //     })

    //     expect(useDeps().apiClient).toHaveBeenCalledTimes(1)
    //     expect(useDeps().apiClient).not.toHaveBeenCalled()
    // })
});