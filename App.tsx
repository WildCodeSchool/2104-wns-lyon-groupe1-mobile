import "react-native-gesture-handler";
enableScreens();
import React, { useState } from "react";
import FlashCard from "./src/screens/Flashcard";
import ListFlashCards from "./src/screens/ListFlashCards";
import { enableScreens } from "react-native-screens";
import { screenNames } from "./src/utils/screenNames";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./AuthContext";
import AuthScreen from "./src/screens/AuthScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Stack = createNativeStackNavigator<ParamListBase>();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
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

const AppDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={"listFlashCardsDrawer"}
        component={MainStackNavigator}
        options={{
          title: screenNames.listFlashCards.title,
        }}
      />
      <Drawer.Screen
        name={"settingsDrawer"}
        component={SettingsScreen}
        options={{
          title: screenNames.settingsScreen.title,
        }}
      />
    </Drawer.Navigator>
  );
};

//TODO show page here and do conditional signin
const AppStackNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isSignedIn ? (
        <>
          <Stack.Screen
            name={screenNames.authScreen.name}
            component={AuthScreen}
            options={{ title: screenNames.authScreen.title }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={screenNames.root.name}
            component={AppDrawer}
            options={{ title: screenNames.root.title }}
          />
        </>
      )} */}
      <Stack.Screen
        name={screenNames.authScreen.name}
        component={AuthScreen}
        options={{ title: screenNames.authScreen.title }}
      />
      <Stack.Screen
        name={screenNames.root.name}
        component={AppDrawer}
        options={{ title: screenNames.root.title }}
      />
    </Stack.Navigator>
  );
};

//==================================================================================

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
