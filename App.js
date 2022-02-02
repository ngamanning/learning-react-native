import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {  
  const [goals, setGoals] = useState([]);
  const addGoals = ( newGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: newGoal,
      },
    ]);   
  };
  return (
    <View style={styles.root}>
      <GoalInput onClick = {addGoals} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem 
          onDelete = {() => setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== itemData.item.id))}
          title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 60,
  },
});
