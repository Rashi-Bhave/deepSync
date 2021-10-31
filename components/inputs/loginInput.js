import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Icon, Header } from "react-native-elements";
import "../screens.css";

export default class LoginInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
  },
  textInput: {
    width: "75%",
    height: "100%",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    marginTop: 1,
    shadowOpacity: 0,
    borderRadius: 10,
    borderColor: "#dbdbdb",
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: "13%",
  },
});
