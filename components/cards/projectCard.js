import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { FaImage } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
export default class ProjectCard extends Component {
  render() {
    return (

        <View style={styles.cardContainer}>
          <Text style={{ fontSize: 16 }}>{this.props.title}</Text>
          <FaImage style={{ width: 50, height: 50, padding: 30 }} />
        </View>
   
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    margin:20,
    width: "180px",
    height: "180px",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor:'white'
  },
});
