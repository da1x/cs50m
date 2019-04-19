import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import NumberInput from "./components/NumberInput";
import vibrate from "./utils/vibrate";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakTime: 5 * 60,
      workTime: 25 * 60,
      defTime: 25 * 60,
      currentTimer: "Work",
      isCounting: false
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    const { defTime, isCounting } = this.state;
    if (defTime > 0 && isCounting) {
      this.setState({
        ...this.state,
        defTime: this.state.defTime - 1
      });
    }
    if (defTime == 0) {
      vibrate();
      this.toggleTimer();
    }
  };

  startTimer = () => {
    const { isCounting } = this.state;
    if (isCounting === false) {
      this.timerID = setInterval(this.tick, 1000);
      this.setState({ isCounting: true });
    }
  };

  pauseTimer = () => {
    const { isCounting } = this.state;
    this.setState({
      ...this.state,
      isCounting: !isCounting
    });
  };

  setTimeValue = (timer, val) => {
    if (timer === "Work") {
      this.setState({ workTime: val }, this.shouldUpdateTimer("Work", val));
    } else {
      this.setState({ breakTime: val }, this.shouldUpdateTimer("Break", val));
    }
    console.log("Timer: " + timer + " || Val: " + val);
  };

  shouldUpdateTimer = (timerToUpdate, val) => {
    const { currentTimer } = this.state;
    let valForTimer = val;
    if (currentTimer == timerToUpdate) {
      this.setState({ defTime: valForTimer });
    }
  };

  resetTimer = () => {
    const { workTime } = this.state;
    this.setState({
      ...this.state,
      defTime: workTime,
      isCounting: false,
      currentTimer: "Work"
    });
  };

  toggleTimer = () => {
    const { currentTimer, breakTime, workTime } = this.state;
    let nextTimer = currentTimer === "Work" ? "Break" : "Work";
    let nextTime = nextTimer === "Work" ? workTime : breakTime;
    this.setState({
      ...this.state,
      currentTimer: nextTimer,
      defTime: nextTime
    });
  };

  render() {
    const {
      defTime,
      currentTimer,
      isCounting,
      workTime,
      breakTime
    } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {currentTimer === "Work" ? "WORK TIMER" : "BREAK TIMER"}
        </Text>
        <Timer time={defTime} />
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => this.pauseTimer()}
            title={isCounting === false ? "Start" : "Pause"}
          />
          <Button onPress={() => this.resetTimer()} title="Reset" />
        </View>
        <NumberInput
          time={workTime}
          type="Work"
          action={this.setTimeValue}
          title="Work"
        />
        <NumberInput
          time={breakTime}
          type="Break"
          action={this.setTimeValue}
          title="Break"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 48,
    fontWeight: "bold"
  },
  buttonStyle: {
    flexDirection: "row"
  }
});
