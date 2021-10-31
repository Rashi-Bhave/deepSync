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
import OtpInput from "../components/inputs/otpInput";

export default class PasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      pageState: "email",
    };
  }

  render() {
    if (this.state.pageState == "email") {
      return (
        <View style={styles.container}>
          <LoginHeader title="Forgot Password" rightIcon="times" onPressRight={()=>{
          this.props.onPress()
        }}/>
          <Text style={styles.text}>Please enter your registered Email ID</Text>
          <Text style={styles.subText}>
            We will send a verification code to your registered email ID
          </Text>

          <View style={styles.textInput}>
            <Icon
              style={{ paddingTop: "30%", color: "#0c3f72" }}
              name="envelope"
              type="font-awesome"
            />
            <TextInput
              style={{ height: "100%", paddingLeft: "2%" }}
              placeholder="example@gmail.com"
            />
          </View>
          <View style={{ marginTop: "15%" }}></View>
          <LoginButton title="Next" onPress={()=>{
            this.setState({
              pageState: "otp",
            }) 
          }}/>
        </View>
      );
    } else if (this.state.pageState == "otp") {
      return (
        <View style={styles.container}>
          <LoginHeader
            title="Forgot Password"
            leftIcon="chevron-left"
            rightIcon="times"
            onPressLeft={() => {
              this.setState({
                pageState: "email",
              }) 
            }}
            onPressRight={()=>{
              this.props.onPress()
            }}
          />
          <Text style={styles.text}>Please enter your registered Email ID</Text>
          <Text style={styles.subText}>
            We will send a verification code to your registered email ID
          </Text>
          <OtpInput />
          <View style={{ marginTop: "5%" }}></View>
          <LoginButton title="Next" onPress={()=>{
            this.setState({
              pageState: "reset",
            }) 
          }}/>
        </View>
      );
    } else if (this.state.pageState == "reset") {
      return (
        <View style={styles.container}>
          <LoginHeader
            title="Forgot Password"
            leftIcon="chevron-left"
            rightIcon="times"
            onPressLeft={() => {
              this.setState({
                pageState: "otp",
              }) 
            }}
            onPressRight={()=>{
              this.props.onPress()
            }}
          />

          <Text style={styles.text}>Please enter a new password</Text>

          <PasswordInput title="Password" placeholder="Enter Password" />

          <LoginInput title="Confirm Password" placeholder="Re-enter Password" />
          <View style={{ marginTop: "5%" }}></View>
          <LoginButton title="Change Password" onPress={()=>{
            this.props.onPress()
          }}/>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent:'space-between',
    position:'absolute',
    paddingBottom:"15%"
  },
  textInput: {
    width: "75%",
    height: "10%",
    borderWidth: 1,
    paddingTop: "0.5%",
    paddingLeft: "2%",
    marginTop: "5%",
    shadowOpacity: 0,
    borderRadius: 10,
    borderColor: "#dbdbdb",
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "15%",
  },
  subText: {
    fontSize: 14,
    color: "#726a6a",
    marginTop: "5%",
  },
});
