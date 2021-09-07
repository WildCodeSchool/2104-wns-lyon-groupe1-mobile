import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

import FlashCardCell from "../components/FlashCardCell";
import { ScrollView } from "react-native-gesture-handler";
import AppLayout from "../components/Layout";
//=============================================================================

export default function ListFlashCards(): JSX.Element {
  const [filterText, setFilterText] = useState("");
  //TODO implement debouncer here
  useEffect(() => {});

  return (
    <AppLayout>
      <ScrollView contentContainerStyle={styles.cellsContainer}>
        <View style={styles.filterContainer}>
          <TextInput
            onChangeText={setFilterText}
            value={filterText}
            placeholder={"Nom de la fiche"}
            textContentType={"emailAddress"}
            style={styles.filterInput}
          />
          <Image source={require("../../assets/filterLoop.png")} />
        </View>
        <FlashCardCell flashCardTitle={"title 1"} flashCard_id={"id 1"} />
        <FlashCardCell flashCardTitle={"title 2"} flashCard_id={"id 2"} />
        <FlashCardCell flashCardTitle={"title 3"} flashCard_id={"id 3"} />
        <FlashCardCell flashCardTitle={"title 4"} flashCard_id={"id 4"} />
        <FlashCardCell flashCardTitle={"title 5"} flashCard_id={"id 5"} />
        <FlashCardCell flashCardTitle={"title 6"} flashCard_id={"id 6"} />
        <FlashCardCell flashCardTitle={"title 7"} flashCard_id={"id 7"} />
        <FlashCardCell flashCardTitle={"title 8"} flashCard_id={"id 8"} />
        <FlashCardCell flashCardTitle={"title 9"} flashCard_id={"id 9"} />
        <FlashCardCell flashCardTitle={"title 10"} flashCard_id={"id 10"} />
        <FlashCardCell flashCardTitle={"title 11"} flashCard_id={"id 11"} />
        <FlashCardCell flashCardTitle={"title 12"} flashCard_id={"id 12"} />
      </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  cellsContainer: {
    alignItems: "center",
  },

  filterContainer: {
    flexDirection: "row",

    width: "90%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#787878",
    padding: 5,
    borderRadius: 5,
  },
  filterInput: {
    flex: 1,
  },
});
