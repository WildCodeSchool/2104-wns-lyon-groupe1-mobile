import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import AppLayout from "../components/Layout";
import { screenNames } from "../utils/screenNames";


export default function AuthScreen() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //TODO correct this by adding the type instead of any
  const navigation = useNavigation<any>();

  const authenticate = () => {
    navigation.navigate(screenNames.root.name);
  };


  //=======================================================================
  return (
    <AppLayout>
      <View style={stlyes.layout}>
        <Image source={require("../../assets/mainLogo.png")} />
        <TextInput
          onChangeText={setEmailInput}
          value={emailInput}
          placeholder={"Email"}
          style={stlyes.authInput}
          textContentType={"emailAddress"}
        />
        <TextInput
          onChangeText={setPasswordInput}
          value={passwordInput}
          placeholder={"Mot de passe"}
          style={stlyes.authInput}
          textContentType={"newPassword"}
          secureTextEntry={true}
        />
        <View style={stlyes.authButtonContainer}>
          <Button
            title={"Me connecter"}
            onPress={authenticate}
            color={"#8FC89A"}
          />
        </View>
      </View>
    </AppLayout>
  );
}

const stlyes = StyleSheet.create({
  layout: {
    textAlign: "center",
    padding: 20,
    alignItems: "center",
  },
  authInput: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#8FC89A",
    width: "80%",
    padding: 5,
  },
  authButtonContainer: {
    marginTop: 60,
    width: "80%",
  },
});
