import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import { CustomButton as Button } from "../components/Button";
import SelectedNumber from "../components/SelectedNumber";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.guess}>Opponent's Guess:</Text>
        <SelectedNumber selectedNumber={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button buttonProps={{ title: "TOO LOW", onPress: () => {}, color: Colors.primary}}  />
          <Button buttonProps={{ title: "TOO HIGH", onPress: () => {}, color: Colors.accent }} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
    alignContent: "center",
  },
  guess:{
    textAlign: "center",
  },
  card : {
      width: 300,     
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
