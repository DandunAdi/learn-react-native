import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "AAA", id: 1 },
    { name: "BBB", id: 2 },
    { name: "CCC", id: 3 },
    { name: "DDD", id: 4 },
    { name: "EEE", id: 5 },
    { name: "FFF", id: 6 },
    { name: "GGG", id: 7 },
    { name: "HHH", id: 8 },
    { name: "III", id: 9 },
    { name: "JJJ", id: 10 },
    { name: "KKK", id: 11 },
  ])

  return (
    <View style={styles.container}>

      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
