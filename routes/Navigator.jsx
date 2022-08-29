import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import LandingPage from "../screens/LandingPage.jsx";

const Stack = createStackNavigator();

export default function(){
  return(
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}