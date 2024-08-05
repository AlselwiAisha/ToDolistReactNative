import React from "react";
import { StyleSheet, TouchableOpacity ,Text, View} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TodosItem({ item, pressHandler }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
      <View style={styles.text}>
        <AntDesign name="delete" size={24} color="black" />
        <Text>{item.text}</Text>
      </View>
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
        color: "#333",
    },
    });