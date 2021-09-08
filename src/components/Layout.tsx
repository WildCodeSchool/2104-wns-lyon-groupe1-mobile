import React from "react";
import { View, StyleSheet } from "react-native";

interface IChildren {
  children: any;
}

export default function AppLayout({ children }: IChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>{children}</View>
    </View>
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
