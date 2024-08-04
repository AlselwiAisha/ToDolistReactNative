import React from "react";
import { StyleSheet, TouchableOpacity ,Text} from "react-native";

export default function TodosItem({ item, pressHandler }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    item:{ 
        width: "100%",
        padding: 20,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    },
    text: {
        color: "coral",
    },
    });