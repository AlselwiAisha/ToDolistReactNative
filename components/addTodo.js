import React, { useState } from "react";
import { StyleSheet,TextInput,View, Button} from "react-native";

export default function AddTodo({submitHandler}) {
   const [text, setText] = useState("");

    const changeHenhler = (val) => {
        setText(val);
    }
  return (
    <View style={styles.add}>
      <TextInput 
      style={styles.input} 
      placeholder="Add todo..."
      onChangeText={changeHenhler}/>
      <View style={styles.button}>
      <Button onPress={()=> submitHandler(text)} title="Add" color="coral" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: "90%",
    },
    add: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "90%",
        padding: 10,
        margin: 10,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
    },
    });