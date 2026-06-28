import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";
import product from "./product";

function App() {
  let firstName = "Moetaz";

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Image /> {/* This component will render the product image */}
        <Card.Body>
          <Card.Title>
            <Name /> {/* This component will render the product name */}
          </Card.Title>
          <Card.Text>
            <Description />{" "}
            {/* This component will render the product description */}
          </Card.Text>
          <Button variant="primary">
            <Price /> {/* This component will render the product price */}
          </Button>
        </Card.Body>
      </Card>
      <h1>Hello, {firstName ? firstName : "there!"}</h1>{" "}
      {/* This will display "Hello, ElonMusk!" if firstName is truthy, otherwise it will display "Hello, there!" */}
      {firstName && <img src={product.image} alt={product.name} />}{" "}
      {/* This will render the product image only if firstName is truthy */}
    </>
  );
}

export default App;
