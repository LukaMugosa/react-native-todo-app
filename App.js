import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import TodoList from "./screens/TodoList";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Todo App" component={Home}/>
                <Stack.Screen
                    name="Todo list"
                    component={TodoList}
                    options={({route}) => {
                        return (
                            {
                                title: route.params.title,
                                headerStyle: {
                                    backgroundColor: route.params.color,
                                },
                                headerTintColor: "white"
                            }
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
