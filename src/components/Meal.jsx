import React from "react";

function Meal(props) {

  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="meal">
      <h1>{props.location}</h1>
      <p>{props.order}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Meal;
