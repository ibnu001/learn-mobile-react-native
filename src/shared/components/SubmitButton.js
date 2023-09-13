import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function SubmitButton({ onSubmit, title, additionalSyle, colorText }) {
  return (
    <TouchableHighlight
      underlayColor={"#cacaca"}
      onPress={onSubmit}
      style={[styles.button, additionalSyle]}
    >
      <Text style={colorText ? colorText : styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    // paddingHorizontal : 12,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 13,
  },
  text: {
    color: "#666666",
    fontWeight: "bold",
  },
});
