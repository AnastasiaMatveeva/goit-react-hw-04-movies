import React, { useEffect, useState } from "react";
import * as fetchMoviesAPI from "../service/fetchMoviesAPI.js";
import MovieList from "../components/MovieList/MovieList.js";
export default function HomePage() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMoviesAPI.fetchTrending().then((data) => setMovieData(data.results));
  }, []);

  return <>
  {movieData &&
    <>
      <h1>Trending today</h1>
      <MovieList movies={movieData} />
    </>
    }</>
}
