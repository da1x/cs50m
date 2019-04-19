import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Constants } from "expo";

import BoulderList from "../components/BoulderList";

export default class BoulderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Boulder Screen </Text>
        <BoulderList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});
