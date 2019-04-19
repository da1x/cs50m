import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchData } from "../redux/actions";

import SimpleChart from "./SimpleChart";
import BoulderForm from "./BoulderForm";
import { Constants } from "expo";

export default class BoulderList extends Component {
  state = {
    dataList: []
  };

  componentDidMount() {
    this.fetchDataFromFirebase();
  }

  fetchDataFromFirebase = async () => {
    try {
      const result = await fetchData();
      this.setState({ dataList: result }, console.log(this.state.dataList));
    } catch (err) {
      console.log(err.message);
    }
  };
  render() {
    const data = [
      { key: "Devin" },
      { key: "Jackson" },
      { key: "James" },
      { key: "Joel" },
      { key: "John" },
      { key: "Jillian" },
      { key: "Jimmy" },
      { key: "Julie" }
    ];
    return (
      <View style={styles.container}>
        <SimpleChart />
        <BoulderForm />

        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { padding: 20 },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});
