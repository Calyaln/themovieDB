import React from "react";
import StarRating from "./StarRating";

const Movie = (props) => {
  const img_api = "https://image.tmdb.org/t/p/original/";

  const { poster_path, title, vote_average, overview } = props.movie;

  return (
    <div className="movieCard">
      <div className="movieCard--element">
        <img
          className="movieCard--image"
          src={img_api + poster_path}
          alt="movie_poster"
        />

        <div className="movieCard--detail-1">
          <h3>{title}</h3>
          <StarRating rating={vote_average} />
          <div>{vote_average / 2}</div>
        </div>
      </div>

      <div className="movieCard--detail-2">
        <p style={{ width: "500px" }}>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
