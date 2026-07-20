import React from "react";

type Greeting = {
  name: string;
};

const Greeting = ({ name }: Greeting) => {
  return <h1>Hello, {name}!</h1>;
};
export default Greeting;
