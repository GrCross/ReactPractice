import { useState } from "react";
import "./componentsCss/Filter.css";

const Filter = (props) => {
  const [filterList, setFilter] = useState(props.filterList);

  const handleFilter = (event) => {
    if (event.target.value === "") {
      setFilter(props.filterList);
      return;
    } else {
      const filteredValues = props.filterList.filter(
        (item) => item.toLowerCase().indexOf(event.target.value) !== -1
      );
      setFilter(filteredValues);
    }
  };

  return (
    <>
      <div class="filterComponent">
        Search: <input type="text" onChange={handleFilter}></input>
      </div>
      {filterList.map((item, index) => (
        <div class="filterComponent" key={index}>
          {item}
        </div>
      ))}
    </>
  );
};

export default Filter;
