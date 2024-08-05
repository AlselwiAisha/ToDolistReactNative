import React, {useState}from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View ,Text,Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
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
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    padding: 20,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "coral",
  },
  content: {
    flex: 1,
    padding: 40,
    width: "100%",
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
