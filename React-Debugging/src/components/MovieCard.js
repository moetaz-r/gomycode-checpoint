import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ title, index, posterURL, description, rating }) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src={posterURL}
        style={{ width: "250px", height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <ReactStars
            value={rating}
            count={9}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
