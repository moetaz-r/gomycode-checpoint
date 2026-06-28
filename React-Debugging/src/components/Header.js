import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactStars from "react-stars";

const Header = ({ setSearch, setRating }) => {
  const handelChange = (e) => {
    setSearch(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <ReactStars
            count={9}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
