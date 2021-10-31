import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { BsArrowLeftShort } from "react-icons/bs";
import JobCard from "../components/cards/jobCard";
export default class SelectJob extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: "83%" , }}>
        <View style={styles.textContainer}>
          <BsArrowLeftShort
            style={{ width: 30, height: 30, marginRight: 10 }}
            onClick={() => {
              this.props.onArrowClick();
            }}
          />
          <Text style={styles.text}>Please Select a Job Type</Text>
        </View>
        <View style={styles.cardContainer}>
          <JobCard title='Enter Script/Audio get LipSynced video'/>
          <JobCard title='Upload Video get LipSynced video'/>
          <JobCard title='Upload Audio with video get dubbed video'/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  textContainer:{
    flexDirection: "row", justifyContent: "center"
  },
  cardContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
