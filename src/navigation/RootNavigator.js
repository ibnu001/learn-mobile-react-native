import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplasScreen from "../screens/SplasScreen/SplasScreen";

import PATH from "./NavigationPath";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import TodoScreen from "../screens/TodoScreen/TodoScreen";
import PopupMenu from "../screens/TodoScreen/components/PopupMenu";
import { View } from "react-native";
import { navigationRef } from "./RootNavigation";
import { Login } from "../screens/LoginScreen/Login";
import LoginService from "../services/LoginService";
import TodoService from '../services/TodoService'
import { ToDo } from "../screens/TodoScreen/ToDo";

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>

            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen
                    name={PATH.SPLASH}
                    component={SplasScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.LOGIN}
                    // component={LoginScreen}
                    options={{ headerShown: false }}
                >
                    {() => <LoginScreen login={() => Login(LoginService)} />}
                </Stack.Screen>
                <Stack.Group
                    screenOptions={({ navigation }) => {
                        return {
                            headerStyle: {
                                backgroundColor: "#233D90",
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 30,
                            },
                            headerShadowVisible: false,
                            headerRight: () => <PopupMenu navigation={navigation} />,
                            headerLeft: () => <View />
                        };
                    }}
                >
                    <Stack.Screen
                        name={PATH.TODO_SCREEN}
                        // component={TodoScreen}
                        options={{ title: "Todos" }}
                    >
                        {() => <TodoScreen todo={() => ToDo(TodoService)} />}
                    </Stack.Screen>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation