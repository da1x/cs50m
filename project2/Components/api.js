export const fetchMovieList = async query => {
  const apiKey = "d08d8d7e779126fcd57dfc8a29e95bab";
  const apiSite =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    apiKey +
    "&query=" +
    query;

  let response = await fetch(apiSite);
  let result = await response.json();
  return result;
};

// TODO: Format data
// Image - Left side
// Bold title name with year under - right side
const processMovieList = movieList => ({});
