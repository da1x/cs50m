import React, { Component } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

import ScrollViewMovies from "./ScrollViewMovies";
import { fetchMovieList } from "./api";

export default class MovieBrowser extends Component {
  state = {
    text: "",
    movies: []
  };

  getMovieList = async query => {
    try {
      if (query != "") {
        let result = await fetchMovieList(query);
        this.setState({ movies: result.results });
      } else {
        this.setState({ movies: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleOnSelectMovie = movie => {
    this.props.navigation.push("MovieDetail", {
      image: movie.poster_path,
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview,
      popularity: movie.popularity,
      voteCount: movie.vote_count
    });
    console.log("onSelectMovie: " + movie.title);
  };

  render() {
    const { movies, text } = this.state;
    return (
      <View>
        <TextInput
          style={styles.inputTextBox}
          onChangeText={text => {
            this.setState({ text: text });
            this.getMovieList(text);
          }}
          value={text}
          placeholder="Search..."
        />
        {this.state.text !== "" ? (
          <ScrollViewMovies
            movies={movies}
            onSelectMovie={this.handleOnSelectMovie}
          />
        ) : (
          <Text>No results...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTextBox: {
    height: 25,
    width: 400,
    borderColor: "gray",
    borderWidth: 1
  }
});
