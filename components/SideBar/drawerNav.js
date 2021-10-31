import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FaBars } from "react-icons/fa";

export default class DrawerNav extends Component {
  
  render() {
    return (
      <View style={styles.barContainer}>
        <FaBars style={{ width: 30, height: 30 }}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  barContainer: {
    margin: 20,
    height: 70,
    justifyContent: "center",
    width: "5%",
    alignItems: "center",
    backgroundColor: "#DBE8FC",
    borderBottomRightRadius: 40,
    alignSelf:'flex-start'
  },
});
