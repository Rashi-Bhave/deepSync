import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ButtonComp from "../components/buttons/loginButton";
import LoginHeader from "../components/headers/loginHeader";
import InputComp from "../components/inputs/loginInput";
import PasswordInput from "../components/inputs/passwordInput";
import SignIn from "../features/signIn";
import SignUp from "../features/signUp";
import OtpInput from "../components/inputs/otpInput";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { SocialIcon, Icon } from "react-native-elements";
import PasswordReset from "../features/passwordReset";
import { BsArrowLeftShort } from "react-icons/bs";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      pageState: "sign-in",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <BsArrowLeftShort style={{ height: 60, width: 60, color: 'white', alignSelf: 'flex-start' }} onClick={() => {
            this.props.navigation.navigate('Home')
          }} />
          <View style={styles.topInnerContainer}>
            <Text style={styles.greetingText}>Welcome to DeepSync!</Text>
            <Text style={styles.greetingSubText}>
              To get started with your lip-sync video
            </Text>
            <Text style={styles.greetingSubText}>Please Sign In</Text>
          </View>
          <View style={styles.bottomInnerContainer}></View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.cardContainer}>
            {this.state.pageState == "sign-in" ? (
              <SignIn
                onPressPassword={() => {
                  this.setState({ pageState: "reset-password" });
                }}
                onPressCreate={() => {
                  this.setState({ pageState: "sign-up" });
                }}
                onPressSignIn={() => {
                  this.props.navigation.navigate('Dashboard')
                }}
              />
            ) : this.state.pageState == "sign-up" ? (
              <SignUp
                onPress={() => {
                  this.setState({ pageState: "sign-in" });
                }}
              />
            ) : (
              <PasswordReset
                onPress={() => {
                  this.setState({ pageState: "sign-in" });
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: "15%",
    width: "60%",
    height: "60%",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "row",
  },
  leftContainer: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#072f56",
    borderColor: "#0c3f72",
    borderWidth: 2,
    width: "45%",
    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  rightContainer: {
    width: "55%",
    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  topInnerContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "40%",
  },
  bottomInnerContainer: {
    backgroundColor: "white",
    marginTop: "8%",
    borderWidth: 2,
    width: "60%",
    height: "40%",
  },
  greetingText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "10%",
  },
  greetingSubText: {
    color: "white",
    fontSize: 20,
  },
  passwordContainer: {
    alignSelf: "flex-end",
    marginRight: "12%",
    flexDirection: "row",
    marginTop: "5%",
  },
  icon: {
    width: 35,
    height: 35,
  },
  backArrow: {
    height: 80, width: 80, color: 'white', alignSelf: 'flex-start', marginLeft: 20, paddingTop: 20
  }
});
