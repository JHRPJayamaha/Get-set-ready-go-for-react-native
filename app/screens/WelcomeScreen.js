import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/1.jpg")}
    ></ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
