import React from "react";

const StarRating = ({ vote_average }) => {
  if (vote_average > 1) {
    return <span>★☆☆☆☆</span>;
  } else if (vote_average > 3) {
    return <span>★★☆☆☆</span>;
  } else if (vote_average > 5) {
    return <span>★★★☆☆</span>;
  } else if (vote_average > 7) {
    return <span>★★★★☆</span>;
  } else if (vote_average > 9) {
    return <span>★★★★★</span>;
  } else {
    return null;
  }
};

export default StarRating;
