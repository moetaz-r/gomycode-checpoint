import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../redux/actions/actions";
import { updateTask } from "../redux/actions/actions";

function Edit() {
  const dispatch = useDispatch();
  const { show, Editid, tasks } = useSelector((state) => state);
  const handelClose = () => {
    dispatch(hideModal());
  };
  const filtredTask = tasks.find((tasks) => tasks.id == Editid);

  const [updatedTask, setUpdatedTask] = useState({});

  const handelUpdatedTask = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handelSaveTask = () => {
    dispatch(updateTask(updatedTask));
    handelClose();
  };

  return (
    <>
      <Modal show={show} onHide={handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card
            border="primary"
            className="text-center"
            style={{ marginTop: "10px" }}
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Task id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="task id"
                  name="id"
                  defaultValue={filtredTask !== undefined ? filtredTask.id : ""}
                  onChange={handelUpdatedTask}
                />
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="task ID"
                  name="ID"
                  defaultValue={filtredTask !== undefined ? filtredTask.ID : ""}
                  onChange={handelUpdatedTask}
                />
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Task image"
                  name="image"
                  defaultValue={
                    filtredTask !== undefined ? filtredTask.image : ""
                  }
                  onChange={handelUpdatedTask}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Task description"
                  name="description"
                  defaultValue={
                    filtredTask !== undefined ? filtredTask.description : ""
                  }
                  onChange={handelUpdatedTask}
                />
              </Form.Group>
            </Form>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSaveTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
