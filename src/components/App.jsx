import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MealOptionArea from "./MealOptionArea";
import Meal from "./Meal"

function App() {

  const [meals, setMeals] = useState([]);

  function addMeal(newMeal) {
    setMeals(prevMeals => {
      return [...prevMeals, newMeal];
    });
  }

  function deleteMeal(id) {
    setMeals(prevMeals => {
      return [
        ...prevMeals.filter((mealItem, index) => {
          return id !== index;
        })
      ]
    });
  }

  function selectMeal() {
    const rNum = Math.floor(Math.random() * meals.length)

    setMeals(prevMeals => {
      return [
        ...prevMeals.filter((mealItem, index) => {
          return index === rNum;
        })
      ]
    })
  }

  return (
    <div>
      <Header />
      <MealOptionArea
        onAdd={addMeal}
        onSelect={selectMeal}
       />
      {meals.map((mealItem, index) => {
        return (
          <Meal
          key={index}
          id={index}
          location={mealItem.location}
          order={mealItem.order}
          onDelete={deleteMeal}
        />

        )
      })}

      <Footer />
    </div>
  );
}

export default App;
