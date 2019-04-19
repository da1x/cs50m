import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Timer extends Component {
  formatTimer = val => {
    return val > 9 ? "" + val : "0" + val;
  };

  render() {
    const { time } = this.props;
    const timerValue = `${this.formatTimer(
      parseInt(time / 60)
    )} : ${this.formatTimer(time % 60)}`;
    return (
      <View>
        <Text style={styles.counter}>{timerValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 48
  }
});
