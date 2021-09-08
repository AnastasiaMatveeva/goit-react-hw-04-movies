import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}>
              {movie.original_name ||
                movie.name ||
                movie.original_title ||
                movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
