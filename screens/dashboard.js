import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { BsArrowLeftShort } from "react-icons/bs";
import DrawerNav from "../components/SideBar/drawerNav";
import ListView from "../features/listView";
import JobCard from "../components/cards/jobCard";
import DashboardHeader from "../components/headers/dashboardHeader";
import ViewToggle from "../components/headers/ViewToggle";
import GridView from "../features/gridView";
import SelectJob from "../features/selectJobType";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      grid: true,
      list: false,
      phase: "view",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <DashboardHeader />
        {this.state.phase == "view" ? (
          <View style={{ height: "82%" }}>
            <View style={{ flexDirection: "row" }}>
              <DrawerNav />
              <ViewToggle
                onClick={() => {
                  this.setState({
                    grid: !this.state.grid,
                    list: !this.state.list,
                  });
                }}
                gridColor={this.state.grid ? "#3854ba" : "black"}
                listColor={this.state.list ? "#3854ba" : "black"}
              />
            </View>
            {this.state.grid ? (
              <GridView
                onClick={() => {
                  this.setState({ phase: "create" });
                }}
              />
            ) : (
              <ListView  onClick={() => {
                this.setState({ phase: "create" });
              }}/>
            )}
          </View>
        ) : (
          <View style={{ height: "82%" }}>
            <DrawerNav />
            <SelectJob
              onArrowClick={() => {
                this.setState({ phase: "view" });
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "white",
  },
});
