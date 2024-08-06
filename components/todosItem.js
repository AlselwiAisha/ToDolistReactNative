import React from "react";
import { StyleSheet, TouchableOpacity ,Text, View} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TodosItem({ item, pressHandler }) {
  return (
   <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}> 
     <View style = {styles.todo}>
         <MaterialIcons name="delete" size={24} color="black" />
         <Text style ={styles.text}>{item.text}</Text>
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
 todo: {
        flexDirection: "row",
        alignItems: "center",
      },
  text: {
    color: "black",
    paddingLeft: 10,
  }
    });