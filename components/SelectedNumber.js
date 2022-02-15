import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SelectedNumber= (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.selectedNumber}>
         {props.selectedNumber}
      </Text>
    </View>
  );
}

export default SelectedNumber

const styles = StyleSheet.create({   
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedNumber: {
    fontSize: 30,
    fontWeight: "bold",
    padding:10
  },
});

