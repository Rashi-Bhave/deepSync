import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon} from "react-native-elements";
import "../screens.css";
export default class PasswordInput extends Component {
  constructor() {
    super();
    this.state = {
      secureTextEntry: true,
      iconName: "eye-slash",
    };
  }
  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <View
          style={[
            styles.textInput,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <TextInput
            style={{ height: "100%" }}
            secureTextEntry={this.state.secureTextEntry}
            placeholder={this.props.placeholder}
          />
          <TouchableOpacity
            onPress={() => {
              let icon = this.state.secureTextEntry ? "eye" : "eye-slash";
              this.setState({
                secureTextEntry: !this.state.secureTextEntry,
                iconName: icon,
              });
            }}
          >
            <Icon
              style={{ alignSelf: "flex-end" }}
              name={this.state.iconName}
              type="font-awesome"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "9%",
    marginBottom:'2%'
  },
  textInput: {
 
    width: "75%",
    height: "100%",
    borderWidth: 1,
    alignSelf: "center",
    padding: 7,
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
