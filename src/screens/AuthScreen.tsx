import React, { useContext, useState } from "react";
import {
  Button,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import AppLayout from "../components/Layout";
import { AuthContext } from "../../AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/graphqlRequests";
import { ClassroomContext } from "../../ClassroomContext";

export default function AuthScreen() {
  const { signIn } = React.useContext(AuthContext);
  const {setClassroomId} = useContext(ClassroomContext);

  const [emailInput, setEmailInput] = useState<string>("eleve8@aca.com");
  const [passwordInput, setPasswordInput] = useState<string>("eleve8");
  const [authErrorText, setAuthErrorText] = useState<string>("");
  const [isVisibleErrorMessage, setIsVisibleErrorMessage] = useState<boolean>(false);
  const [connect] = useMutation(LOGIN, {    
    onCompleted: (value) => {
      setClassroomId(value.login.classroom[0].classroomId);
      signIn(value.login);
    },
    onError: (e) => {
      setIsVisibleErrorMessage(true);
      setAuthErrorText("Mauvais mail ou mot de passe");
    },
  });

  const authenticate = () => {
    if (emailInput === "" || passwordInput === "") {
      setIsVisibleErrorMessage(true);
      setAuthErrorText("Veuillez entrer un mail et un mot de passe");
    } else {
      connect({
        variables: { mail: emailInput, password: passwordInput },
      });
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
