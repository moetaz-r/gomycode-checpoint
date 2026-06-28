import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filtredMovies }) => {
  return (
    <div
      className="row g-6"
      style={{ display: "flex", justifyContent: "center", gap: "40px" }}
    >
      {filtredMovies.map((movie, index) => {
        return <MovieCard {...movie} index={index} />;
      })}
    </div>
  );
};

export default MovieList;
