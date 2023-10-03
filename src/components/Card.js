import React, { useState } from "react";
import "./componentsCss/Cards.css";

const Card = (props) => {
  const colorsList = ["crimson", "green", "blue", "yellowgreen", "purple"];
  const [cardColor, setCardColor] = useState("black");

  const handleCardColor = () => {
    const random = Math.floor(Math.random() * colorsList.length);
    setCardColor(colorsList[random]);
  };

  return (
    <div
      class="card"
      style={{ backgroundColor: cardColor }}
      onMouseOver={handleCardColor}
    >
      <div class="cardContainer">
        <h4>
          <b>{props.name}</b>
        </h4>
      </div>
    </div>
  );
};

export default Card;
