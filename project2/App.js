import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import MovieDetailScreen from "./screens/MovieDetailScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
