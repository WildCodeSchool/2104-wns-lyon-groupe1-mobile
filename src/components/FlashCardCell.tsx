import React, { useEffect } from "react";
import { FlashCardCellProps } from "../utils/types";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { screenNames } from "../utils/screenNames";

export default function FlashCardCell({
  flashCardTitle,
  flashCard_id,
  flashCardTags,
  subtitles,
  flashCardRessources
}: FlashCardCellProps) {
  const navigation = useNavigation<any>();
  const navigateToFlashCard = () => {
    navigation.navigate(screenNames.flashCard.name, { flashCard_id, flashCardTitle, flashCardTags, flashCardRessources, subtitles });
  };

  return (
    <TouchableOpacity style={styles.cell} onPress={navigateToFlashCard}>
      <Text>{flashCardTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#FCC300",
    marginTop: 30,
    width: "90%",
    borderRadius: 5,
  },
});
