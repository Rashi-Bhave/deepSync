import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import PlanCard from "../components/cards/planCard";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SelectPlan extends Component {
 
  render() {
    
    return (
      <View style={styles.cardContainer}>
        <PlanCard
          title="Free"
          titleColor="#848384"
          amount={this.props.plan1}
          currencyValue={this.props.currencyValue}
          buttonColor="white"
          buttonText="Open Studio"
          textColor="#FF0060"
          content={
            <View style={{ height: "100%" }}>
              <Text style={styles.text}>{"\u2022"} Any face</Text>
              <Text style={styles.text}>{"\u2022"} Any background</Text>
              <Text style={styles.text}>{"\u2022"} Any language</Text>
              <Text style={styles.text}>{"\u2022"} 2 mins of audio sync</Text>
              <Text style={styles.text}>{"\u2022"} No downloads</Text>
              <Text style={styles.text}>{"\u2022"} Not for commercial use</Text>
              <Text style={styles.text}>{"\u2022"} Single User</Text>
              <Text style={styles.text}>
                {"\u2022"} No credit card required
              </Text>
            </View>
          }
        />
        <PlanCard
          title="Pro"
          amount={this.props.plan2}
          titleColor="#FF1A7F"
          currencyValue={this.props.currencyValue}
          content={
            <View style={{ height: "100%" }}>
              <Text style={styles.text}>
                {"\u2022"} Single talking face videos
              </Text>
              <Text style={styles.text}>{"\u2022"} Constant background</Text>
              <Text style={styles.text}>
                {"\u2022"} 60 mins of audio sync/month
              </Text>
              <Text style={styles.text}>{"\u2022"} Any language</Text>

              <Text style={styles.text}>{"\u2022"} Single User</Text>
              <Text style={styles.text}>
                {"\u2022"} Commercial usage rights
              </Text>
              <Text style={styles.text}>{"\u2022"} Chat and email support</Text>
            </View>
          }
        />

        <PlanCard
          title="Pro"
          amount={this.props.plan3}
          currencyValue={this.props.currencyValue}
          titleColor="#5187CB"
          content={
            <View style={{ height: "100%" }}>
              <Text style={styles.text}>
                {"\u2022"} Multiple talking face videos
              </Text>
              <Text style={styles.text}>{"\u2022"} Moving background</Text>
              <Text style={styles.text}>{"\u2022"} Realtime plug-in</Text>
              <Text style={styles.text}>
                {"\u2022"} 60 mins of audio sync/month
              </Text>
              <Text style={styles.text}>{"\u2022"} Any language</Text>

              <Text style={styles.text}>{"\u2022"} Single User</Text>
              <Text style={styles.text}>
                {"\u2022"} Commercial usage rights
              </Text>
              <Text style={styles.text}>{"\u2022"} Priority support</Text>
            </View>
          }
        />
        <PlanCard
          title="Premium"
          amount={this.props.plan4}
          currencyValue={this.props.currencyValue}
          titleColor="#B0A561"
          content={
            <View style={{ height: "100%" }}>
              <Text style={styles.text}>
                {"\u2022"} Multiple talking face videos
              </Text>
              <Text style={styles.text}>{"\u2022"} Moving background</Text>
              <Text style={styles.text}>{"\u2022"} Realtime plug-in</Text>
              <Text style={styles.text}>
                {"\u2022"} 4 hours of audio sync/month
              </Text>
              <Text style={styles.text}>{"\u2022"} Any language</Text>

              <Text style={styles.text}>{"\u2022"} Single User</Text>
              <Text style={styles.text}>
                {"\u2022"} Commercial usage rights
              </Text>
              <Text style={styles.text}>{"\u2022"} Account Manager</Text>
            </View>
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    height: "60%",
    width: "70%",
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  text: { flex: 1, paddingLeft: 5, fontSize: 13 },
});
