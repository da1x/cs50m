import React, { Component } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default class NumberInput extends Component {
  state = {
    mins: Math.floor(this.props.time / 60),
    secs: this.props.time % 60
  };

  updateTime = time => {
    const { action, type } = this.props;
    console.log(time);
    action(type, time);
  };

  handleMinChange = minsString => {
    const { secs } = this.state;
    const mins = +minsString;
    this.setState({ mins }, this.updateTime(mins * 60 + secs));
  };

  handleSecChange = secsString => {
    const { mins } = this.state;
    const secs = +secsString;
    this.setState({ secs }, this.updateTime(mins * 60 + secs));
  };

  render() {
    const { title } = this.props;
    const { mins, secs } = this.state;
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.timeTitle}>{title} Time: </Text>
        <Text>Mins: </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={mins => this.handleMinChange(mins)}
          value={`${mins}`}
          keyboardType="numeric"
          maxLength={2}
        />
        <Text>Secs: </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={secs => this.handleSecChange(secs)}
          value={`${secs}`}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row"
  },
  inputBox: {
    height: 20,
    width: 50,
    borderColor: "gray",
    borderWidth: 1
  },
  timeTitle: {
    //flex: 1
  }
});
