import React, { Component } from "react";
import { View } from "react-native";

import MovieBrowser from "../Components/MovieBrowser";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: "Home",
    headerStyle: {
      backgroundColor: "#fff"
    }
  };
  render() {
    return (
      <View>
        <MovieBrowser navigation={this.props.navigation} />
      </View>
    );
  }
}
