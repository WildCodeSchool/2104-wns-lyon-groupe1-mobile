import "react-native-gesture-handler";
import React from "react";
import AuthScreen from "./src/screens/AuthScreen";
import FlashCard from "./src/screens/Flashcard";
import ListFlashCards from "./src/screens/ListFlashCards";
import { enableScreens } from "react-native-screens";
import {screenNames} from "./src/utils/screenNames"

enableScreens();

import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<ParamListBase>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.authScreen.name}
          component={AuthScreen}
          options={{ title: screenNames.authScreen.title }}
        />
        <Stack.Screen
          name={screenNames.listFlashCards.name}
          component={ListFlashCards}
          options={{ title: screenNames.listFlashCards.title }}
        />
        <Stack.Screen
          name={screenNames.flashCard.name}
          component={FlashCard}
          options={{title : screenNames.flashCard.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
