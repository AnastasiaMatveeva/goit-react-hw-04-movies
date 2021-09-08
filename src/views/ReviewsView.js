import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as fetchMoviesAPI from "../service/fetchMoviesAPI.js";

export default function ReviewsView({ movieId }) {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    fetchMoviesAPI.fetchReviews(movieId).then((data) => {
      setReviewsList(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviewsList.length > 0 ? (
        <>
          <ul>
            {reviewsList.map((review) => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p> No results</p>
      )}
    </>
  );
}

ReviewsView.propTypes = {
  movieId: PropTypes.string.isRequired,
};
