import React from "react";
import { useState } from "react";
import tempMovieData from "../data.js/tempMovieData";
import Movie from "./Movie";
const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
