import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { filteredTask } from "../redux/actions/actions";

function Header() {
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");
  const handleSelect = (select) => {
    dispatch(filteredTask(select));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ToDo Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Filter Tasks" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => handleSelect("All")}
            >
              All
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => handleSelect("true")}
            >
              Done
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.3"
              onClick={() => handleSelect("false")}
            >
              NotDone
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
