import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default class DashboardHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View
            style={{ backgroundColor: "#d2d8d5", width: 70, height: 70 }}
          ></View>
          <Text
            style={{ fontWeight: "bold", fontSize: 30, paddingLeft: "20px" }}
          >
            DeepSync
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.profilePicture}></View>
          <View style={styles.profile}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>My Profile</Text>
            <Text style={{ color: "#726a6a", fontSize: 15 }}>
              abc@gmail.com
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    height: "18%",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "50px",
    backgroundColor: "white",
  },
  profilePicture: {
    backgroundColor: "#d2d8d5",
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  profile: {
    paddingLeft: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
