import React, { useState } from "react";
import { Button, View, Image, TextInput, StyleSheet,Alert } from "react-native";
import AppLayout from "../components/Layout";
import { screenNames } from "../utils/screenNames";
import { AuthContext } from "../../AuthContext";


export default function SettingsScreen() {
    const {signOut} = React.useContext(AuthContext);



  const signoutUser = () => {
    signOut();
  };

  return (
    <AppLayout>
      <View>
        <Button onPress={signoutUser} title={"Se déconnecter"} color ={"#c95252"} />
      </View>
    </AppLayout>
  );
}
