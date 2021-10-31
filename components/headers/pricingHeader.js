import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BsArrowLeftShort } from "react-icons/bs";

export default class PricingHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BsArrowLeftShort style={{ height: 50, width: 50 }} onClick={()=>{this.props.onClick()}} />
        <View>
          <Text style={styles.title}>Pricing plans</Text>
          <Text style={styles.subtitle}>
            Every plan includes 30 days free trial
          </Text>
        </View>
        <View style={{width:60,height:60}}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: "8%",
  },
  title: {
    color: "#2D3748",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  subtitle:{ fontWeight: "bold", fontSize: 12, marginTop: 5 }
});
