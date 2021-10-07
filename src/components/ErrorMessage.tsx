import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { IErrorMessagePorps } from "../utils/types";

export default function ErrorMessage({
  errorText,
  isVisible,
  callback
}: IErrorMessagePorps) {

  return (
    <View style={[styles.container, {display : isVisible ? "flex" : "none"}]}>
      <Text style={styles.errorText}>{errorText}</Text>
      <TouchableOpacity onPress={() => callback()}>
        <Image
          style={styles.cancelIcon}
          source={require("../../assets/cancelIcon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 30,
    backgroundColor: "#d45656",
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  errorText: {
    color: "#ffffffff",
    flex: 1,
    fontSize: 15,
  },
  cancelIcon: {
    width: 30,
    height: 30,
  },
});
