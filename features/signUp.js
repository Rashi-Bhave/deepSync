import React, { Component } from "react";
import { View } from "react-native";

import LoginButton from "../components/buttons/loginButton";
import LoginHeader from "../components/headers/loginHeader";
import LoginInput from "../components/inputs/loginInput";
import PasswordInput from "../components/inputs/passwordInput";
export default class SignUp extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: "100%", alignItems: "center" , justifyContent:'space-between' , paddingBottom:'15%' }}>
        <LoginHeader
          title="Create Account"
          rightIcon="times"
          onPressRight={() => {
            this.props.onPress();
          }}
        />
        <LoginInput title="Name" />
        <LoginInput title="Email" />
        <PasswordInput title="Password" />
        <LoginInput title="Confirm Password" />
        <View style={{ marginTop: "2%" }}></View>
        <LoginButton
          title="Sign Up"
        
          onPress={() => {
            this.props.onPress();
          }}
        />
      </View>
    );
  }
}
