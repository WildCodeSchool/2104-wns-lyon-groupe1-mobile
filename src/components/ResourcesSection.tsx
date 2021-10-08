import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import { iRessourceSectionProps, Ressource } from "../utils/types";

export default function RessourcesSection({ ressources }: iRessourceSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  //=================================================================================
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.titleContainer}>
        <Text style={styles.title}>Ressources</Text>
        <Image
          source={
            isOpen ? require("../../assets/subtitleArrowOpen.png") : require("../../assets/subtitleArrowClosed.png")
          }
        />
      </TouchableOpacity>

      {isOpen && (
        //JE GARDE CA AUSSI DANS LE CAS Où ON A DES URL DANS LES RESSOURCE COMME PREVU LES US
        <View style={styles.ressourcesContainer}>
          {ressources.map((ressources: Ressource, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => openUrl(ressources.url)} style={styles.singleRessource}>
                <View style={styles.circle}></View>
                <Text style={styles.ressourceText}>{ressources.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        /*         <View style={styles.ressourcesContainer}>
          {ressources.map((ressources: Ressource, i) => {
            return (
              <View key={i} style={styles.singleRessource}>
                <View style={styles.circle}></View>
                <Text style={styles.ressourceText}>{ressources.name}</Text>
              </View>
            );
          })}
        </View> */
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#D4D4D4",
    borderWidth: 2,
    borderRadius: 5,
  },

  titleContainer: {
    flexDirection: "row",
    backgroundColor: "#D4D4D4",
    padding: 10,
    alignItems: "center",
  },

  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
  },

  ressourcesContainer: {
    padding: 10,
  },
  singleRessource: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
  },

  ressourceText: {
    color: "blue",
    paddingLeft: 14,
  },

  circle: {
    position: "absolute",
    top: 8,
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: "blue",
    paddingRight: 5,
  },
});
