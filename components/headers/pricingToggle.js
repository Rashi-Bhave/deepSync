import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default class PricingToggle extends Component {
 
  handleCurrencyChange(e){
    this.setState({
      currency: e,
    });
  }
  render() {
    return (
      <View style={{ marginTop: "2%" }}>
        <View style={styles.leftContainer}>
          <View>
            <Text style={{ color: "##5A6375" }}>
              For more details on all our pricing visit here
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Text>Plan</Text>
            <Picker style={styles.pickerContainer}>
              <Picker.Item label="Monthly" value="Monthly" />
              <Picker.Item label="Yearly" value="Yearly" />
            </Picker>
            <Text style={{ marginLeft: 40 }}>Currency</Text>
            <Picker
              style={styles.pickerContainer}
              onValueChange={(e) => {
               this.props.onValueChange(e)
              }}
            >
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="INR" value="INR" />
            </Picker>
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    height: "10%",
    alignSelf: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "30%",
  },
  pickerContainer: {
    backgroundColor: "#11385C",
    borderRadius: 10,
    color: "white",
  },
  divider: {
    alignSelf: "center",
    width: "80%",
    marginTop: "2%",
    borderWidth: 0.5,
    borderColor: "#a5aeb7",
  },
});
