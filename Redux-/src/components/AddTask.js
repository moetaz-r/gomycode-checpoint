import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../redux/actions/actions";
import { Button, Form, Card } from "react-bootstrap";

function AddTask() {
  const dispatch = useDispatch();
  const [newTask, setNewtask] = useState({});
  const handelNewTask = (e) => {
    setNewtask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };
  const handelAddNewTask = (e) => {
    e.preventDefault();
    setNewtask({ ID: "", image: "", description: "" });
    dispatch(addNewTask(newTask));
  };

  return (
    <>
      <Card
        border="primary"
        className="text-center"
        style={{ marginTop: "10px" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="task ID"
              value={newTask.ID}
              name="ID"
              onChange={handelNewTask}
            />
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task image"
              value={newTask.image}
              name="image"
              onChange={handelNewTask}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task description"
              value={newTask.description}
              name="description"
              onChange={handelNewTask}
            />
          </Form.Group>
          <Button
            variant="secondary"
            size="lg"
            active
            onClick={handelAddNewTask}
            className="custom-btn"
          >
            Add Task
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default AddTask;
