import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IChildren {
  children: any;
}

export default function AppLayout({ children }: IChildren) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 10,
  },
  contentWrapper: {
    paddingHorizontal: 8,
  },
});
