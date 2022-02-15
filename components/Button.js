import { Button, View, StyleSheet } from "react-native";

export function CustomButton(props) {
  return (
    <View style={styles.button}>
      <Button {...props.buttonProps} />
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: 100
    },
})