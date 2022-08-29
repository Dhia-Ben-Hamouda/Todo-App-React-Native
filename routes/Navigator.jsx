import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import LandingPage from "../screens/LandingPage.jsx";
import SignIn from "../screens/SignIn.jsx";
import SignUp from "../screens/SignUp.jsx";
import Home from "../screens/Home.jsx";

const Stack = createStackNavigator();

export default function(){
  return(
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}