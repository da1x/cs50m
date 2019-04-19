import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import { Constants } from "expo";

import { addBoulderRoute, fetchBoulderList, fetchData } from "../redux/actions";
import { connect } from "react-redux";

// Climbing grades
import { boulder_JP } from "./ClimbingGrades";

class BoulderForm extends Component {
  state = {
    selectedValue: "",
    numOfClimb: "1",
    key: 0
  };

  onValueChange = value => {
    this.setState({
      selectedValue: value
    });
  };

  handleGetData = () => {
    let data = fetchData();
    console.log(data);
  };

  handleAddRouteToList = () => {
    // TODO: Need error checking
    this.props.addBoulderRoute(this.state.key, {
      grade: this.state.selectedValue,
      numOfClimb: this.state.numOfClimb
    });
    this.setState(prevState => {
      return { key: prevState.key + 1 };
    });
  };

  render() {
    var options = boulder_JP;

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder={options[0]}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selectedValue}
              onValueChange={this.onValueChange}
            >
              {Object.keys(options).map(key => {
                return (
                  <Picker.Item label={options[key]} value={key} key={key} />
                );
              })}
            </Picker>
            <Button title="Add route" onPress={this.handleAddRouteToList} />
            <Button title="Get Date" onPress={this.handleGetData} />
          </Form>
        </Content>
      </Container>
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

const mapStateToProps = state => (
  console.log(state.boulderList),
  {
    boulderList: state.boulderList
  }
);

export default connect(
  mapStateToProps,
  { addBoulderRoute: addBoulderRoute }
)(BoulderForm);
