import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { SwitchNavigator } from "./routers/switchNavigator";
import Login from "./screens/login";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Dashboard from "./screens/dashboard";
import Pricing from "./screens/pricing";

export default class App extends Component {
  render() {
    return <Login />;
  }
}



const AppContainer = createAppContainer(SwitchNavigator);
