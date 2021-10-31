import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegListAlt, FaBars } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { color } from "react-native-reanimated";
import DrawerNav from "../SideBar/drawerNav";
export default class ViewToggle extends Component {
  
  render() {
    return (
      <View style={styles.iconContainer}>
       <View></View>
        <View style={styles.gridContainer}>
          <BsFillGridFill
            style={{ width: 30, height: 30, marginRight: "7%" ,color:this.props.gridColor}}
           onClick={()=>{
             this.props.onClick()
           }}
           />
          <FaRegListAlt style={{ width: 30, height: 30, marginRight: "3%" ,color:this.props.listColor}} 
          onClick={()=>{
            this.props.onClick()
            
          }}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconContainer: {
   

    width:'90%',
    height: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
  barContainer: {
    height: "80%",
    justifyContent: "center",
    width: "5%",
    alignItems: "center",
    backgroundColor: "#DBE8FC",
    borderBottomRightRadius: "70%",
  },
  gridContainer: {
    flexDirection: "row",
    width: "10%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
