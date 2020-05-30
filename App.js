import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  //const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        //flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexShrink: 1,
          width: 400,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
