import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("DDD");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  const pressHandler = () => {
    setName("EEE");
    setPerson({ name: "Luigi", age: 43 });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Click me!" onPress={pressHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  },
  buttonContainer: {
    marginTop: 20,
  }
});
