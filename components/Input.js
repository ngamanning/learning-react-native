import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function Input(props) {
  return (
    <View style={{ marginVertical: props.spacing ? props.spacing : 0 }}>
      <Text>{props.label}</Text>
      <TextInput {...props}
        style={{...styles.input, ...props.styles}} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "#333",
    borderBottomWidth: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});
