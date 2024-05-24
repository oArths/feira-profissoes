import Home from "./src/pages/home";
import Register from "./src/pages/register";
import Splash from "./src/pages/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: null }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
  );
}
