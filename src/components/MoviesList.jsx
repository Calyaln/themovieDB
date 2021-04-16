import React, { Component } from "react";
import axios from "axios";
import SearchAppBar from "./SearchBar";
import Movie from "./Movie";
//import movieJson from "../movies.json";

class MoviesList extends Component {
  state = {
    // movies: movieJson.results,
    movies: [],
    selectedMovie: null,
    search: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5f2e58ff2fad020f46809302f356511e&language=en-US&page=1"
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

  handleSearch = (e) => {
    this.setState({ search: e.target.value });

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=5f2e58ff2fad020f46809302f356511e&language=en-US&page=1&include_adult=false&query=" +
          e.target.value
      )
      .then((apiResponse) => {
        this.setState({ movies: apiResponse.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const filteredMovie = this.state.movies.filter((movie) => {
      return movie.title
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="container">
        <div className="container--movies">
          <div className="container--searchbar">
            <SearchAppBar handleSearch={this.handleSearch} />
          </div>
          {filteredMovie.map((movie) => {
            return (
              <div
                onClick={(e) => this.handleClick(movie)}
                style={{ textDecoration: "none", color: "black" }}
                key={movie.id}
              >
                <h3>{movie.title}</h3>
              </div>
            );
          })}
        </div>

        {this.state.selectedMovie !== null && (
          <div className="container--movie">
            <Movie movie={this.state.selectedMovie} />
          </div>
        )}
      </div>
    );
  }
}

export default MoviesList;
