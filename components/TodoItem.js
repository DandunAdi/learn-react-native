import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
  }
})
