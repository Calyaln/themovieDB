import React, { Component } from "react";
import axios from "axios";
import SearchAppBar from "./SearchBar";
import Movie from "./Movie";

class MoviesList extends Component {
  state = {
    movies: [],
    selectedMovie: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/29d6c084-0f1a-4093-b260-676d7b08baf0/movies.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210412T133354Z&X-Amz-Expires=86400&X-Amz-Signature=ce5e87d945c77f237feeef8d1f61b40bed160645ce65c7ae7d6c74b7b24ba01c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22movies.json%22"
      )
      .then((apiResponse) => {
        this.setState({ movies: apiResponse.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(movie) {
    this.setState({ selectedMovie: movie });
  }

  render() {
    return (
      <>
        <SearchAppBar />

        {this.state.selectedMovie !== null && (
          <div>
            <Movie movie={this.state.selectedMovie} />
          </div>
        )}

        {this.state.movies.map((movie) => {
          return (
            <div
              onClick={(e) => this.handleClick(movie)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 key={movie.id}>{movie.title}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default MoviesList;
