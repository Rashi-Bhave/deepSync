import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PlanCard extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Text style={{ color: this.props.titleColor, fontWeight: "bold", fontSize: 20 }}>
          {this.props.title}
        </Text>
        <Text>Get Started</Text>
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>
         {this.props.amount}
        </Text>
        <Text>{this.props.currencyValue}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: this.props.buttonColor
                ? this.props.buttonColor
                : "#FF0060",
            },
          ]}
        >
          <Text
            style={{
              color: this.props.textColor ? this.props.textColor : "white",
              alignSelf: "center",
            }}
          >
            {this.props.buttonText ? this.props.buttonText : "Buy Plan"}
          </Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>{this.props.content}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    height: "90%",
    width: "20%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    borderWidth: 2,
    height: 35,
    width: 100,
    justifyContent: "center",
    borderColor: "#FF0060",
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: { height: "40%", width: "100%" },
});
