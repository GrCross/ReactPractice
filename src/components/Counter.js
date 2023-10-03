import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleCounter}>add count</button>
    </>
  );
};

export default Counter;
