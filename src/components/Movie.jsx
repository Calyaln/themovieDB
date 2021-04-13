import React from "react";

const Movie = (props) => {
  //const img_api = "https://image.tmdb.org/t/p/original/";

  const {
    // poster_path,
    title,
    vote_average,
    overview,
    release_date,
  } = props.movie;

  return (
    <>
      <div>
        {/* <img src={img_api + poster_path} alt="movie_poster" /> */}
        <h3>{title}</h3>
        <div>{vote_average}</div>
        <p>{overview}</p>
        <div>{release_date}</div>
      </div>
    </>
  );
};

export default Movie;
