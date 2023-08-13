import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

import Dummy_Meals from "../../dummy_meals";
import MealCard from "./MealItem/MealCard";

const AvailableMeals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMeals = Dummy_Meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(filteredMeals);

  const mealsList = filteredMeals.map((meal) => (
    <MealCard
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      rating={meal.rating}
    />
  ));

  return (
    <section className="m-2 p-4">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search meals..."
          className="p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500 w-64"
        />
        <BsSearch size={24} className="ml-2 text-gray-600" />
      </div>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
