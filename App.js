import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";

export default function App() {  
  
  return (
    <View style={styles.screen}>
      <Header title='Guess A number'/>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
