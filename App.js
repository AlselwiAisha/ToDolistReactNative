import React, {useState}from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View ,Text,Alert} from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';

export default function App() {
const [todos, setTodos] = useState([
  {text: 'Go shopping ', key: '1'},
  {text: 'create an app', key: '2'},
]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
}

const submitHandler = (text) => {
  if(text.length > 3){
  setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString()},
      ...prevTodos
    ];
  });
}
else{
  Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
    {text: 'Ok', onPress: () => console.log('alert closed')}
  ]);
}}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "coral",
  },
  content: {
    padding: 40,
    width: "100%",
  },
  list: {
    marginTop: 20,
  }
});
