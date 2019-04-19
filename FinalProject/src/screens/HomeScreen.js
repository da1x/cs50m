import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

export default class MainScreen extends Component {
  static navigationOptions = {
    title: "Welcome!"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Home Screen </Text>
        <Button title="Back ot Login!" onPress={() => navigate("Login")} />
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
