import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("DDD");
  const [age, setAge] = useState("20");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="e.g. John"
          multiline
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="90"
          value={age}
          onChangeText={(val) => setAge(val)}
        />
        <Text>My name is {name} and my age is {age}!</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "white",
    padding: 8,
    margin: 10,
    width: 200,
  }
});
