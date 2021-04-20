import React from "react";

// why not try with while loop

const starsRating = (props) => {
  if (props.rating > 1 && props.rating < 3) {
    return <span>★☆☆☆☆</span>;
  } else if (props.rating > 3 && props.rating < 5) {
    return <span>★★☆☆☆</span>;
  } else if (props.rating > 5 && props.rating < 7) {
    return <span>★★★☆☆</span>;
  } else if (props.rating > 7 && props.rating < 9) {
    return <span>★★★★☆</span>;
  } else if (props.rating > 9) {
    return <span>★★★★★</span>;
  } else {
    return <span>☆☆☆☆☆</span>;
  }
};

export default starsRating;
