import "react-native-gesture-handler";
import React, { Dispatch, useState } from "react";
import FlashCard from "./src/screens/Flashcard";
import ListFlashCards from "./src/screens/ListFlashCards";
import { screenNames } from "./src/utils/screenNames";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./AuthContext";
import * as SecureStore from "expo-secure-store";
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

//==================================================================================

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  //============================
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
    console.log(state.useToken);
  }, []);

  //============================
  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.userToken === null ? (
            <Stack.Screen
              name={screenNames.authScreen.name}
              component={AuthScreen}
              options={{ title: screenNames.authScreen.title }}
            />
          ) : (
            <Stack.Screen
              name={screenNames.root.name}
              component={AppDrawer}
              options={{ title: screenNames.root.title }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
