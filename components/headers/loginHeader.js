import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class LoginHeader extends Component {


  render() {
    const title = this.props.title
    const leftIcon = this.props.leftIcon
    const rightIcon = this.props.rightIcon
    return (
      <View style={styles.header}>
        <Icon
          name={leftIcon}
          type="font-awesome"
          onPress={() => {
            this.props.onPressLeft();
          }}
        />
        <Text style={styles.headerText}>{title}</Text>
        <Icon
          name={rightIcon}
          type="font-awesome"
          onPress={() => {
            this.props.onPressRight();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: "90%",
    height: "15%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'row',

  },
  headerText: {
    fontSize: 22,
  },
});
