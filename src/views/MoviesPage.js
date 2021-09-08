import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Searchbar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import * as fetchMoviesAPI from "../service/fetchMoviesAPI.js";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMoviesAPI
      .fetchQuery(searchQuery)
      .then((data) => {
        if (!data.results.length) {
          alert(`${searchQuery} not found`);
          return;
        }
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [searchQuery]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setSearchQuery(searchURL);
  }, [searchURL]);

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setHistory(searchQuery);
  };
  const setHistory = (searchQuery) => {
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
