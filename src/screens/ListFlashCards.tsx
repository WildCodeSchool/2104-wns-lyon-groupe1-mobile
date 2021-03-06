import React, { useEffect, useState, useCallback, useContext, useMemo } from "react";
import { View, StyleSheet, TextInput, Image, Alert } from "react-native";
import { debounce } from "lodash";
import FlashCardCell from "../components/FlashCardCell";
import { ScrollView } from "react-native-gesture-handler";
import AppLayout from "../components/Layout";
import { useQuery } from "@apollo/client";
import { GET_ALL_FLASH_CARDS } from "../utils/graphqlRequests";
import { ClassroomContext } from "../../ClassroomContext";
//=============================================================================


export default function ListFlashCards(): JSX.Element {
  const [filterText, setFilterText] = useState("");
  const [filterTextDelayed, setFilterTextDelayed] = useState("");
  const [flashCards, setFlashCards] = useState<any>([]);
  const { classroomId } = useContext(ClassroomContext);
  const { data } = useQuery(GET_ALL_FLASH_CARDS, { variables: { classroomId: classroomId } });


  //MERCI DE GARDER USE MEMO ICI
  //https://github.com/trojanowski/react-apollo-hooks/issues/133
  //https://github.com/trojanowski/react-apollo-hooks/issues/158
  useMemo(() => {
    if (data) {
      setFlashCards(data.getAllFlashcards);
    }
  }, [data]);

  useEffect(() => {
    if(data){
      if (filterTextDelayed === "") {
        setFlashCards(data.getAllFlashcards);
      }
      if (filterTextDelayed !== "") {
        filterFlashCards(flashCards, filterTextDelayed);
      }
    }
  }, [filterTextDelayed]);

  //============================================================================
  const filterFlashCards = (listFlashCards: any, filterTextDelayed: string) => {
    let listFilteredFlashCards = [];
    for (let i = 0; i < listFlashCards.length; i++) {
      for (let j = 0; j < listFlashCards[i].tag.length; j++) {
        if (listFlashCards[i].tag[j] === filterTextDelayed) {
          listFilteredFlashCards.push(listFlashCards[i]);
        }
      }
    }
    setFlashCards(listFilteredFlashCards);
  };
  //============================================================================

  const debouncedFilter = useCallback(
    debounce((value: string) => setFilterTextDelayed(value), 500),
    []
  );
  const handleFilterTextChange = (value: string) => {
    setFilterText(value);
    debouncedFilter(value);
  };
  //===============================================================================

  return (
    <AppLayout>
      <ScrollView contentContainerStyle={styles.cellsContainer}>
        <View style={styles.filterContainer}>
          <TextInput
            onChangeText={(value) => handleFilterTextChange(value)}
            value={filterText}
            placeholder={"Nom de la fiche"}
            textContentType={"emailAddress"}
            style={styles.filterInput}
          />
          <Image source={require("../../assets/filterLoop.png")} />
        </View>

        {/* {data?.getAllFlashcards.map((flashCard: any, key: number) => { */}
        {flashCards.map((flashCard: any, key: number) => {
          return (
            <FlashCardCell
              key={key}
              flashCardTitle={flashCard.title}
              flashCard_id={flashCard.id}
              flashCardTags={flashCard.tag}
              flashCardRessources={flashCard.ressource}
              subtitles={flashCard.subtitle}
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
    borderWidth: 1,
    borderColor: "#787878",
    padding: 5,
    borderRadius: 5,
  },
  filterInput: {
    flex: 1,
  },
});
