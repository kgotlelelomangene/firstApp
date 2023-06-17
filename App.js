import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Log in" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} options={{
          title: "Create account",
          // headerShown: true,
          headerTitleAlign: 'center',
        }}/>
    </Stack.Navigator>
    </NavigationContainer>   
  );
}


