import axios from "axios";
import { GlobalError, UnauthorizedError } from "../utils/AppError";
import LocalStorage from "../utils/LocalStorage";

const client = axios.create({
    // baseURL: 'https://dummyjson.com'
    baseURL: 'http://10.10.100.212:8888/api/v1'
})

client.interceptors.request.use(async (config) => {
    if (config.url === '/auth/login') {
        const token = await LocalStorage().getData('token')
        console.log('=== token:', token);
        config.headers = {
            'Authorization': `Bearer ${token}`
        }
        // console.log('Api CLient');
    }
    // console.log(config);
    console.log('=== ApiClient: ', config.data);
    return config
})

const apiClient = async ({
    url, method, params = null
}) => {
    try {
        const result = await client[method](url, params)
        console.log('=== result: ', result);
        return result.data
    } catch (e) {
        // if (e.response) {
        //     if (e.response === 401) {
        //         throw new UnauthorizedError('Unauthorized')
        //     }
        // } else {
        //     throw new GlobalError(e)
        // }
        if (e.response) {
            if (e.response.status === 401) {
                throw new UnauthorizedError('Unauthorized', e.response.status);
            } else {
                throw new GlobalError('Request Failed', e.response.status);
            }
        } else {
            throw new GlobalError('Network Error', 0);
        }
    }
}

// const apiClient = async ({ url, method, data = null }) => {
//     try {
//         const corsAnywhereURL = "https://cors-anywhere.herokuapp.com/http://localhost:8888/api/v1";
//         const result = await client[method](corsAnywhereURL + url, data);
//         return result.data;
//     } catch (error) {
//         console.log('Error ApiClient : ', error);
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     throw new UnauthorizedError("Unauthorized");
//                 default:
//                     break;
//             }
//         } else {
//             throw new GlobalError("Oops");
//         }
//     }
// };

export default apiClient