import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalStorage from "../../src/utils/LocalStorage";

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  }));

describe('Local Storage', () => {
    const localStorage = LocalStorage()

    test('Set data to async storage', async () => {
        const KEY = 'token'
        const VALUE = 'token123'

        await localStorage.setData(KEY, VALUE)

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(KEY, VALUE)
    })
});