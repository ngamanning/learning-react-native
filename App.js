import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [choosenNumber, setChosenNumber] = useState()

  const startGame = (userSelectedNumber) => {
    setChosenNumber(userSelectedNumber)
  }

  let content = <StartGameScreen onStart = {startGame} />
  if (choosenNumber) {
    content = <GameScreen userChoice = {choosenNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
