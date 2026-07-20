import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState<number>(0);
  const increment = () => setState(state + 1);
  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
