import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default class MovieDetailScreen extends Component {
  static navigationOption = ({ navigation }) => ({
    headerTitle: "Movie Title",
    headerRight: (
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    )
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.row}>
        <Image
          source={{
            uri:
              "https://image.tmdb.org/t/p/original/" +
              navigation.getParam("image")
          }}
          style={styles.imageSize}
        />
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("releaseDate")}</Text>
        <Text>{navigation.getParam("overview")}</Text>
        <Text>Popularity: {navigation.getParam("popularity")}</Text>
        <Text>Vote Count: {navigation.getParam("voteCount")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { padding: 10 },
  imageSize: {
    width: null,
    height: 300,
    resizeMode: "cover"
  },
  listText: {
    padding: 25
  }
});
