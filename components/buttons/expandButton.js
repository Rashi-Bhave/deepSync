import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default class ExpandButton extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
    };
  }
  render() {
    const expand = this.state.expand;
    return (
      <View>
        {this.state.expand ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AiOutlineMinusCircle
              style={{ width: 30, height: 30, justifySelf: "center" }}
              onClick={() => {
                this.setState({
                  expand: !this.state.expand,
                });
              }}
            />
            <Text
              style={{ fontSize: 18 }}
              onPress={() => {
                this.setState({
                  expand: false,
                });
              }}
            >
              {this.props.tName}
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AiOutlinePlusCircle
              style={{ width: 30, height: 30, justifySelf: "center" }}
              onClick={() => {
                this.setState({
                  expand: !this.state.expand,
                });
              }}
            />
            <Text
              style={{ fontSize: 18 }}
              onPress={() => {
                this.setState({
                  expand: expand,
                });
              }}
            >
              {this.props.tName}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
