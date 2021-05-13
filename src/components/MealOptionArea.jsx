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

  function submitMeal(event) {
    props.onAdd(meal);
    setMeal({
      location: "",
      order: ""
    });
    event.preventDefault();
  }

  function selectClick() {
    props.onSelect();
  }

  return (
    <div>
      <form className="create-meal">
    <input onChange={handleChange} name="location" placeholder="Enter meal location" value={meal.location} />
    <textarea onChange={handleChange} name="order" placeholder="Enter order" value={meal.order} />
    <button onClick={submitMeal}>Add</button>
  </form>
  <div className="select-container">
      <button className="select" onClick={selectClick}>Select Meal</button>
  </div>
  </div>
  )
}

export default MealOptionArea;
