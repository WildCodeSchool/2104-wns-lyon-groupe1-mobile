import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { debounce, filter } from "lodash";
import FlashCardCell from "../components/FlashCardCell";
import { ScrollView } from "react-native-gesture-handler";
import AppLayout from "../components/Layout";

import { listFlashCardsMock } from "../utils/mocks/listFlashCardsMock";
import { useQuery } from "@apollo/client";
import { GET_ALL_FLASH_CARDS } from "../utils/graphqlRequests";
import { AuthContext } from "../../AuthContext";
import { Picker } from "@react-native-picker/picker";
//=============================================================================

export default function ListFlashCards(): JSX.Element {
  const [filterText, setFilterText] = useState("");
  const [filterTextDelayed, setFilterTextDelayed] = useState("");
  const [flashCards, setFlashCards] = useState<any>([{}]);
  const { appContext } = React.useContext(AuthContext);

  useEffect(() => {
    console.log(appContext);
    if (filterTextDelayed === "") {
      setFlashCards(listFlashCardsMock);
    }
    if (filterTextDelayed !== "") {
      fetchFlashCards(listFlashCardsMock, filterTextDelayed);
    }
  }, [filterTextDelayed]);

  //============================================================================
  const fetchFlashCards = (listFlashCards: any, filterTextDelayed: string) => {
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
  picker : {
    color: "black"
  },


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
