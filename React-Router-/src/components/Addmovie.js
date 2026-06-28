import { Card, Button, Form, Container } from "react-bootstrap";

const Addmovie = ({ handelAddNewMovie, newMovie, setNewMovie }) => {
  const handelNewMovie = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Card
        border="primary"
        className="text-center"
        style={{ marginTop: "10px" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="movie title"
              value={newMovie.title}
              name="title"
              onChange={handelNewMovie}
            />
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="movie poster"
              value={newMovie.posterURL}
              name="posterURL"
              onChange={handelNewMovie}
            />
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="movie rating"
              value={newMovie.rating}
              name="rating"
              onChange={handelNewMovie}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="movie description"
              value={newMovie.description}
              name="description"
              onChange={handelNewMovie}
            />
          </Form.Group>
          <Button
            variant="secondary"
            size="lg"
            active
            onClick={handelAddNewMovie}
            className="custom-btn"
          >
            Add Movie
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Addmovie;
