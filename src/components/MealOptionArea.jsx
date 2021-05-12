import React, { useState } from "react";

function MealOptionArea(props) {

  const [meal, setMeal] = useState({
    location: "",
    order: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;
    setMeal(prevMeal => {
      return {
        ...prevMeal,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form className="create-meal">
    <input onChange={handleChange} name="locaton" placeholder="Enter meal location" value={meal.location} />
    <textarea onChange={handleChange} name="order" placeholder="Enter order" value={meal.order} />
    <button>Add</button>
  </form>
  </div>
  )
}

export default MealOptionArea;
