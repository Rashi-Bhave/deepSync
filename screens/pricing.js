import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import PricingHeader from "../components/headers/pricingHeader";
import { Picker } from "@react-native-picker/picker";
import { color } from "react-native-reanimated";
import SelectPlan from "../features/selectPlan";
import PricingToggle from "../components/headers/pricingToggle";
export default class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      exchangeValue: 75,
      plan1: "$" + 0,
      plan2: "$" + 250,
      plan3: "$" + 500,
      plan4: "$" + 1000,
      currencyValue: "USD/Month",
    };
  }
  handleAmount(e) {
    var exchangeValue = this.state.exchangeValue;
    if (e == "USD") {
      this.setState({
        currencyValue: "USD/Month",
        plan1: "$" + 0,
        plan2: "$" + 250,
        plan3: "$" + 500,
        plan4: "$" + 1000,
      });
    } else if (e == "INR") {
      this.setState({
        currencyValue: "INR/Month",
        plan1: "₹" + 0 * exchangeValue,
        plan2: "₹" + 250 * exchangeValue,
        plan3: "₹" + 500 * exchangeValue,
        plan4: "₹" + 1000 * exchangeValue,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PricingHeader
          onClick={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <PricingToggle
          onValueChange={(e) => {
            this.handleAmount(e);
          }}
        />
        <SelectPlan
          plan1={this.state.plan1}
          plan2={this.state.plan2}
          plan3={this.state.plan3}
          plan4={this.state.plan4}
          currencyValue={this.state.currencyValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#F1F5FE",
  },
  cardContainer: {
    borderWidth: 2,
    height: "60%",
    width: "70%",
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
});
