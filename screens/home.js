import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import bgimg from "../assets/bg1.png";
import img1 from "../assets/tree.png";
import img2 from "../assets/jump.png";
import YouTube from "react-youtube";

export default class Home extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "200",
      width: "350",
      marginHorizontal: "20",
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <ImageBackground source={bgimg}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Deep Sync UI</Text>
            <View style={styles.contents}>
              <Text
                style={styles.contentsText}
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
              >
                Studio
              </Text>
              <Text style={styles.contentsText}>Products</Text>
              <Text style={styles.contentsText}  onPress={() => {
                  this.props.navigation.navigate("Pricing");
                }}>Pricing</Text>
            </View>
          </View>
          <View style={styles.centerComponent}>
            <Text style={styles.centerText}>What does DeepSync do?</Text>
            <Text style={styles.centerSubText}>
              sbbvjwabvvbuaidbvaubvabvbvdiedwvbaebvoaebvowbvbviblxmkjdieohufb
              cmksdjeihfbdn djhe
            </Text>
          </View>

          <View style={styles.footer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image source={img1} style={styles.img} />
              <YouTube
                YouTube
                videoId="0fXaDCZNOJc"
                opts={opts}
                onReady={this._onReady}
              />
              <Image source={img2} style={styles.img} />
              <Image source={img1} style={styles.img} />
              <Image source={img2} style={styles.img} />
              <Image source={img1} style={styles.img} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  headerContainer: {
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contents: {
    width: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  centerComponent: {
    height: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: "35%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 350,
    height: 200,
    marginHorizontal: 20,
  },
  titleText: { fontSize: 30, marginLeft: 20, fontWeight: "bold" },
  contentsText: { fontSize: 20, fontWeight: "bold", color: "#0f4a89" },
  centerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  centerSubText: {
    fontSize: 15,
  },
});
