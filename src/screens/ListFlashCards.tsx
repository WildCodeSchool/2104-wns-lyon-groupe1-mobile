import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

import FlashCardCell from "../components/FlashCardCell";
import { ScrollView } from "react-native-gesture-handler";
import AppLayout from "../components/Layout";

import { listFlashCardsMock } from "../utils/mocks/listFlashCardsMock";
//=============================================================================


export default function ListFlashCards(): JSX.Element {
  const [filterText, setFilterText] = useState("");
  const [flashCards, setFlashCards] = useState<any>([{}]);
  //TODO implement debouncer
  useEffect(() => {
    setFlashCards(listFlashCardsMock);
  }, []);

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

        {flashCards.map((flashCard: any, key: number) => {
          return (
            <FlashCardCell
              key={key}
              flashCardTitle={flashCard.title}
              flashCard_id={flashCard._id}
            />
          );
        })}
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
