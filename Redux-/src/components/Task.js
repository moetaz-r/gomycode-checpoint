import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions/actions";
import { deleteTask } from "../redux/actions/actions";

const Task = ({ ID, image, description, id }) => {
  const dispatch = useDispatch();

  const handelShowModal = (e) => {
    dispatch(showModal(id));
  };

  const handelDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <input type="checkbox" className="check" />
        IsDone
        <Card.Title>{ID}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="info" onClick={() => handelShowModal(id)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => handelDeleteTask(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Task;
