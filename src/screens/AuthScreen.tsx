import React, { useState } from "react";
import {
  Button,
  View,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import AppLayout from "../components/Layout";
import { AuthContext } from "../../AuthContext";
import ErrorMessage from "../components/ErrorMessage";

export default function AuthScreen() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authErrorText, setAuthErrorText] = useState("");
  const [isVisibleErrorMessage, setIsVisibleErrorMessage] = useState(false);

  const { signIn } = React.useContext(AuthContext);

  const authenticate = () => {
    if (emailInput === "" || passwordInput === "") {
      setIsVisibleErrorMessage(true);
      setAuthErrorText("Veuillez entrer un mail et un mot de passe");
    } else {
      signIn({ emailInput, passwordInput });
    }
  };

  //=======================================================================
  return (
    <AppLayout>
      <ErrorMessage
        errorText={authErrorText}
        isVisible={isVisibleErrorMessage}
        callback={() => setIsVisibleErrorMessage(false)}
      />
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
