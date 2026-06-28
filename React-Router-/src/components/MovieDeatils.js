import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDeatils = ({ movies }) => {
  const { id } = useParams();
  const [findMovie, setFindMovie] = useState({});
  useEffect(() => {
    setFindMovie(movies.find((movie) => movie.id == id));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#be1036ff" }}>Movie Deatils</h1>
      <h2 style={{ color: "#0f034eff" }}>`{findMovie.title}`</h2>
      <h3 style={{ color: "#940c94ff" }}> Trailer :</h3>
      <iframe
        width="653"
        height="380"
        src={findMovie.trailer}
        title="trailer"
      />
      <h3 style={{ color: "#200219ff", marginTop: "10px" }}>
        "{findMovie.description}"
      </h3>
      <h2>{findMovie.rating}</h2>

      <Link to="/">Home Page</Link>
    </div>
  );
};

export default MovieDeatils;
