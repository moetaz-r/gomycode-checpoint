import React from "react";
import MovieList from "./MovieList";
const Filter = ({ title, movies, search, rating }) => {
  const filtredMovies = movies.filter(
    (movie) =>
      movie.title &&
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating
  );
  return (
    <div>
      <MovieList filtredMovies={filtredMovies} />{" "}
    </div>
  );
};
export default Filter;
