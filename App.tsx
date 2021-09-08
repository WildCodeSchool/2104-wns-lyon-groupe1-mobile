import "react-native-gesture-handler";
enableScreens();
import React from "react";
import AuthScreen from "./src/screens/AuthScreen";
import FlashCard from "./src/screens/Flashcard";
import ListFlashCards from "./src/screens/ListFlashCards";
import { enableScreens } from "react-native-screens";
import { screenNames } from "./src/utils/screenNames";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<ParamListBase>();
const Drawer = createDrawerNavigator();
//===================================================================================
// const AuthContext = React.createContext();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={"Wiki-notes"} component={MainStackNavigator} />
      <Drawer.Screen
        name={screenNames.authScreen.name}
        component={AuthScreen}
        options={{
          title: "Se déconnecter",
          drawerLabelStyle: {
            color: "#d67575",
            // backgroundColor: "#d67575"
          },
        }}
      />
    </Drawer.Navigator>
  );
};




//TODO show page here and do conditional signin
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      
{/*       <Stack.Screen
        name={screenNames.authScreen.name}
        component={AuthScreen}
        options={{ title: screenNames.authScreen.title }}
      /> */}
      <Stack.Screen
        name={screenNames.listFlashCards.name}
        component={ListFlashCards}
        options={{ title: screenNames.listFlashCards.title }}
      />
      <Stack.Screen
        name={screenNames.flashCard.name}
        component={FlashCard}
        options={{
          title: screenNames.flashCard.title,
          headerStyle: {
            backgroundColor: "#FCC300",
          },
        }}
      />
    </Stack.Navigator>
  );
};

//==================================================================================

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}