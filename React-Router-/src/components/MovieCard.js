import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = ({ title, index, posterURL, description, rating, id }) => {
  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        variant="top"
        src={posterURL}
        style={{ width: "250px", height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>
          <ReactStars
            value={rating}
            count={9}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
        </Card.Text>
        <Link to={`/Details/${id}`} className="nav-link">
          Show Movie Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
