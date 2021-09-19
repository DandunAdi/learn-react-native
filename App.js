import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a coffee", key: 1 },
    { text: "Walk my dog", key: 2 },
    { text: "Badminton", key: 3 },
  ]);

  const handlePress = (key) => {
    setTodos(prevTodos => prevTodos.filter(item => item.key !== key));
  }

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => (
        [
          { text, key: prevTodos.length + 1 },
          ...prevTodos
        ]
      ));
    } else {
      Alert.alert("Oops!", "Character must be more than 3 chars", [
        {text: "OK", onPress: () => console.log("alert closed")}
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <AddTodo onSubmit={handleSubmit} />
          <FlatList
            data={todos}
            keyExtractor={item => item.key.toString()}
            renderItem={({ item }) => (
              <TodoItem item={item} onPress={handlePress} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
