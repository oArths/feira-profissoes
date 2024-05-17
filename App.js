import { StatusBar } from "expo-status-bar";
import Home from "./src/pages/home";
import Register from "./src/pages/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { GlobalStyle } from './global.jsx';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      {/* <StatusBar style="default" backgroundColor="black"  /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
