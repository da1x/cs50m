import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text
} from "react-native";
import PropTypes from "prop-types";

const ScrollViewMovies = props => (
  <ScrollView>
    {props.movies.map(movie => {
      if (movie.original_language === "en") {
        return (
          <TouchableOpacity
            onPress={() => {
              props.onSelectMovie(movie);
            }}
            key={movie.id}
            style={styles.row}
          >
            <View style={styles.listLayout}>
              <Image
                source={{
                  uri:
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                }}
                style={styles.imageSize}
              />
              <View style={styles.listText}>
                <Text>{movie.title}</Text>
                <Text>{movie.release_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    })}
  </ScrollView>
);

ScrollViewMovies.propTypes = {
  movies: PropTypes.array
};

const styles = StyleSheet.create({
  row: { padding: 10 },
  listLayout: {
    flex: 1,
    flexDirection: "row"
  },
  imageSize: {
    width: 100,
    height: 100
  },
  listText: {
    padding: 25
  }
});

export default ScrollViewMovies;
