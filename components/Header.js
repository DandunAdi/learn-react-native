import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 45,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  }
})
