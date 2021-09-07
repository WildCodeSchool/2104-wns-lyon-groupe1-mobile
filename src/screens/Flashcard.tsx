import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/core";
import { RootStackParamList } from "../utils/types";
import { useNavigation } from "@react-navigation/core";
import { FlashCardProps } from "../utils/types";
import AppLayout from "../components/Layout";

//========================================================
export default function FlashCard({
  user_id,
  flashCard_id,
  flashCardTitle,
}: FlashCardProps): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, "FlashCard">>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({ title: route.params.flashCardTitle });
  });

  return (
    <AppLayout>
      <Text>{flashCardTitle}</Text>
      <Text>this is a title</Text>
    </AppLayout>
  );
}
