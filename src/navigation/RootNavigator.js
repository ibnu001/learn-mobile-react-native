import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplasScreen from "../screens/SplasScreen/SplasScreen";
import { PATH } from "./NavigationPath";
import TodoScreen from "../screens/TodoScreen/TodoScreen";

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen name={PATH.SPLASH} component={SplasScreen} options={{ headerShown: false }} />
                <Stack.Screen name={PATH.TODO_SCREEN} component={TodoScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation