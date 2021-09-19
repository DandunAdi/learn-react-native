import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "AAA", key: 1 },
    { name: "BBB", key: 2 },
    { name: "CCC", key: 3 },
    { name: "DDD", key: 4 },
    { name: "EEE", key: 5 },
    { name: "FFF", key: 6 },
    { name: "GGG", key: 7 },
    { name: "HHH", key: 8 },
    { name: "III", key: 9 },
    { name: "JJJ", key: 10 },
    { name: "KKK", key: 11 },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "magenta",
    fontSize: 24,
  }
});
