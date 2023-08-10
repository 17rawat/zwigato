import React from "react";

import MealCard from "./MealCard";

const MealItem = ({ name, price, description }) => {
  return (
    <div className="mb-4">
      <MealCard name={name} price={price} description={description} />
    </div>
  );
};

export default MealItem;
