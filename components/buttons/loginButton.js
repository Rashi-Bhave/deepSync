import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class LoginButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.props.onPress();
        }}
      >
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignSelf:'center',
    width: "75%",
    height: "10%",
    backgroundColor: "#0c3f72",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
