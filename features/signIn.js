import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SocialIcon, Icon } from "react-native-elements";

import LoginButton from "../components/buttons/loginButton";
import LoginHeader from "../components/headers/loginHeader";
import LoginInput from "../components/inputs/loginInput";
import PasswordInput from "../components/inputs/passwordInput";
export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      secureTextEntry: true,
      iconName: "eye-slash",
    };
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%", alignItems: "center" , justifyContent:'space-evenly' }}>
        <LoginHeader title="Account Sign In" />
        <LoginInput title="Email" />
        <PasswordInput title="Password" />
        <View style={styles.passwordContainer}>
          <Text
            style={{
              color: "black",
              paddingRight: 5,
            }}
          >
            Forgot
          </Text>
          <Text
            style={{
              color: "#2541ce",
            }}
            onPress={()=>{
              this.props.onPressPassword()
            }}
          >
            Password?
          </Text>
        </View>
        <LoginButton title="Sign In" onPress={()=>{this.props.onPressSignIn()}} />
        <Text style={{}}>New User?</Text>
        <Text style={{ color: "#2541ce" }}  onPress={()=>{
              this.props.onPressCreate()
            }}>Create an account</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: "2%",
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#d2d8d5" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>Or use</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#d2d8d5",
              width: "100%",
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <SocialIcon style={styles.icon} type="facebook" />
          <SocialIcon style={styles.icon} type="google" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  passwordContainer: {
    alignSelf: "flex-end",
    marginRight: "12%",
    flexDirection: "row",
  justifyContent:'space-evenly',
  paddingVertical:'1%'
  
  },
  icon: {
    width: '35px',
    height: '35px',
  },
});
