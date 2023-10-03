import React, { useState } from "react";

const Toggler = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleToggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <h2 className={toggle ? "active" : ""}>Hellow</h2>
      <button onClick={handleToggler}>Toggle</button>
    </>
  );
};

export default Toggler;
