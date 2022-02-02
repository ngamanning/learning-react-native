import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Set a goal"
        style={styles.input}
        onChangeText={(goal) => setGoal(goal)}
        value={goal}
      />
      <Button title="Add" onPress={props.onClick.bind(this, goal)} />
    </View>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
});
