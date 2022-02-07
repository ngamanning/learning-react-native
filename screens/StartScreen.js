import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import theme from "../constants/theme";

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleInputChange = inputValue => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card styles={{ maxWidth: "80%" }}>
          <Input
            blurOnSubmit
            keyboardType="number-pad"
            autocorrect={false}
            autoCapitalize="none"
            maxLength={2}
            onchangeText={handleInputChange}
            value={enteredValue}
            label="Enter a value"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={theme.colors.primary}
                onPress={() => {}}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={theme.colors.secondary}
                title="Confirm"
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default StartScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },

  buttonContainer: {
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    minWidth: 80,
  },
});
