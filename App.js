import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.textBold}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, nostrum.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, nostrum.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, nostrum.</Text>
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
});
