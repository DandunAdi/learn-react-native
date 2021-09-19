import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddTodo({ onSubmit }) {
  const [text, setText] = useState("");
  const handleSubmit = (text) => {
    onSubmit(text);
    setText("");
  }
  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        placeholder="New todo..."
        style={styles.input}
      />
      <Button
        title="ADD"
        color="coral"
        onPress={() => handleSubmit(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb"
  }
})
