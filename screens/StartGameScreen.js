import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard, 
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import {CustomButton as Button }  from '../components/Button';
import SelectedNumber from '../components/SelectedNumber';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [choosenNumber, setChosenNumber] = useState(null);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInput =() => {
    setEnteredValue('');
  }

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number','Must be a number between 1 and 99',
        [{text:'Okay', style:'destructive', onPress:resetInput}]);
    }
    setChosenNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  } 

  let confirmModal = null;
  if (choosenNumber) {
    confirmModal = 
    <View style={styles.confirmModal}>
      <Text>You selected</Text>
      <SelectedNumber selectedNumber={choosenNumber}/>
      <Button buttonProps={{title: 'START GAME', onPress: () => props.onStart(choosenNumber)}} />
    </View>
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button buttonProps = {{title: 'Reset', onPress: resetInput, color: Colors.accent}} />
            <Button buttonProps = {{title: 'Confirm', onPress: confirmInput, color: Colors.primary}} />
          </View>
          {confirmModal}
        </Card>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmModal: {
    width: 300,
    padding: 20,
    alignItems: "center",
  }
  
});

export default StartGameScreen;
