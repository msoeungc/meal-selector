import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MealOptionArea from "./MealOptionArea";
import Meal from "./Meal"

function App() {
  return (
    <div>
      <Header />
      <MealOptionArea />
      <Meal />
      <Footer />
    </div>
  );
}

export default App;
