import React, { useState } from "react";
import { iSubTitleSectionProps, Paragraph } from "../utils/types";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SubTitleSection({
  title,
  paragraphs,
}: iSubTitleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.titleContainer}
      >
        <Text style={styles.title}>{title}</Text>
        <Image
          source={
            isOpen
              ? require("../../assets/subtitleArrowOpen.png")
              : require("../../assets/subtitleArrowClosed.png")
          }
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.paragraphsContainer}>
          {paragraphs.map((paragraph : Paragraph, i : number) => {
            return <Text style={styles.singleParagraph} key={i}>{paragraph.text}</Text>;
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#D4D4D4",
    borderWidth: 2,
    borderRadius: 5
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
  paragraphsContainer: {
    padding: 10,
  },

  singleParagraph : {
      marginBottom: 10
  }
});
