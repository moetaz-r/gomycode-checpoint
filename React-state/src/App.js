import React from "react";
import { Card, Navbar, Container, Button } from "react-bootstrap";

class App extends React.Component {
  state = {
    fullName: " ",
    bio: " ",
    imgSrc: " ",
    profession: " ",
    show: false,
  };

  handleClick = () =>
    this.setState({
      fullName: "Moetaz",
      bio: "developer",
      imgSrc:
        "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
      profession: "graduated",
      timer: 0,
    });
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
    this.handleClick();
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };
  render() {
    return (
      <div className="d-grid gap-2">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8m8UuRL2ab_gk9blXR1gyzw0nxSPXXJSQJw&s"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              PROFILE
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Button variant="secondary" size="lg" onClick={this.handleShow}>
          Show Profile {this.state.show ? "Hide Profile" : "Show Profile"}
        </Button>

        {this.state.show && (
          <>
            <Card className="text-center">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={this.state.imgSrc}
                  style={{ width: "250px", height: "250px" }}
                />
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ marginTop: "10px" }}
                >
                  {" "}
                  Name : {this.state.fullName}
                </Card.Subtitle>
                <Card.Text>Bio : {this.state.bio} </Card.Text>
                <Card.Text>Profession : {this.state.profession} </Card.Text>
                <Card.Text>Time Interval : {this.state.timer} </Card.Text>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    );
  }
}
export default App;
