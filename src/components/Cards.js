import React, { useRef, useState } from "react";
import Card from "./Card";
import "./componentsCss/Cards.css";

const Cards = (props) => {
  const sampleList = ["banana", "apple", "mango"];

  const movingCard = useRef();
  const movedCard = useRef();
  const [fruitItems, setFruitItems] = useState(sampleList);

  const handleCardSort = () => {
    let fruitItemsTemp = [...fruitItems];

    let tempMovingItem = fruitItemsTemp[movingCard.current];
    let tempMovedItem = fruitItemsTemp.splice(
      movedCard.current,
      1,
      tempMovingItem
    );
    fruitItemsTemp.splice(movingCard.current, 1, tempMovedItem);

    //fruitItemsTemp.splice(movingCard.current, 0, tempMovedItem);
    console.log("holaaa");
    console.log(fruitItemsTemp);

    movedCard.current = null;
    movingCard.current = null;

    setFruitItems(fruitItemsTemp);
  };

  return (
    <div className="cardsContainer">
      {fruitItems.map(
        (item, index) => (
          console.log(item),
          (
            <div
              key={index}
              draggable
              onDragStart={(event) => (movingCard.current = index)}
              onDragEnter={(event) => (movedCard.current = index)}
              onDragEnd={handleCardSort}
            >
              <Card name={item}></Card>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Cards;
