import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => console.log("Button Tapped")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
