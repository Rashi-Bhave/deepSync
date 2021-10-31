import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import "../screens.css";

export default class OtpInput extends Component {
  constructor() {
    super();
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
    };
  }
  componentDidMount() {
      this.refs.pin1ref.focus();

  }
  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    return (
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin1ref"}
          value={pin1}
          onChangeText={(pin1) => {
            this.setState({ pin1: pin1 });
            if (pin1 != "") {
              this.refs.pin2ref.focus();
            }
          }}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin2ref"}
          value={pin2}
          onChangeText={(pin2) => {
            this.setState({ pin2: pin2 });
            if (pin2 != "") {
              this.refs.pin3ref.focus();
            }
          }}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin3ref"}
          value={pin3}
          onChangeText={(pin3) => {
            this.setState({ pin3: pin3 });
            if (pin3 != "") {
              this.refs.pin4ref.focus();
            }
          }}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin4ref"}
          value={pin4}
          onChangeText={(pin4) => {
            this.setState({ pin4: pin4 });
            if (pin4 != "") {
              this.refs.pin5ref.focus();
            }
          }}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin5ref"}
          value={pin5}
          onChangeText={(pin5) => {
            this.setState({ pin5: pin5 });
            if (pin5 != "") {
              this.refs.pin6ref.focus();
            }
          }}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          ref={"pin6ref"}
          value={pin6}
          onChangeText={(pin6) => {
            this.setState({ pin6: pin6 });
            if (pin6 != "") {
              this.refs.pin6ref.blur();
            }
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  otpContainer: {
    marginTop: "5%",
    width: "100%",
    height: "15%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: "10%",
  },
  otpInput: {
    textAlign: "center",
    fontSize: 22,
    alignSelf: "center",
    height: "80%",
    width: "10%",
    borderRadius: 5,
    backgroundColor: "#d2e3f4",
  },
});
