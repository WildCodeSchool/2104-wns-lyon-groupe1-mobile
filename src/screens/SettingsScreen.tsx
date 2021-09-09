import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View, Image, TextInput, StyleSheet,Alert } from "react-native";
import AppLayout from "../components/Layout";
import { screenNames } from "../utils/screenNames";

export default function SettingsScreen() {
    const navigation = useNavigation<any>();

  const signout = () => {
    navigation.navigate(screenNames.authScreen.name);
  };

  return (
    <AppLayout>
      <View>
        <Button onPress={signout} title={"Se déconnecter"} color ={"#c95252"} />
      </View>
    </AppLayout>
  );
}
