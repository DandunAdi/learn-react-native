import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a coffee", key: 1 },
    { text: "Walk my dog", key: 2 },
    { text: "Badminton", key: 3 },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={item => item.key.toString()}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
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
