import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BsBoxArrowUpRight } from "react-icons/bs";
import DrawerNav from "../SideBar/drawerNav";
export default class JobCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>
          vouwgvwuobubwobvbbvibibewbwivbbcvwuoc wu
          wvbowuevweoubvucweobvwobuvwecowvwweouc
          cbeouwfgbhdcsjeufbdjsckhfuiebjvsdchudbsjckh
          bvcwoeubdjogcbdjhewbcdhidefobcvwdhkjhiheb
        </Text>
        <View style={{ alignSelf: "flex-end", marginRight: 10}}>
          <BsBoxArrowUpRight
            style={{ width: 22, height: 22, color: "#12375C" }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: 140,
    width: 480,
    backgroundColor: "#F3F9FD",
    alignItems: "center",
    borderRadius: 10,
    margin:20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    marginTop: 10,
    color: "#A6A6A6",
  },
});
