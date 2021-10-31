import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ProjectCard from "../components/cards/projectCard";
export default class GridView extends Component {
  constructor() {
    super();
    this.state = {
      grid: true,
      list: false,
    };
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.centerComponent}>
        <View style={styles.cardContainer}>
          <Text style={{ fontSize: 16 , color:'white'}}>Create a new Project</Text>
          <AiOutlinePlusCircle style={{ width: 50, height: 50, padding: 30 , color:'white'}} onClick={()=>{
            this.props.onClick()
          }}/>
        </View>
        <ProjectCard title="Project 01" />
        <ProjectCard title="Project 02" />
        <ProjectCard title="Project 03" />
        <ProjectCard title="Project 04" />
        <ProjectCard title="Project 05" />
        <ProjectCard title="Project 06" />
        <ProjectCard title="Project 07" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  
  centerComponent: {
    width: "80%",
    height: "100%",
    alignSelf: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
     
    
    
  },
  cardContainer: {
    margin: 20,
    width: "180px",
    height: "180px",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#12375C",
  },
});
