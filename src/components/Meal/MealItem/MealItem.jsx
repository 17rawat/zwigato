import React from "react";

import MealCard from "./MealCard";

const MealItem = ({ id, name, price, description }) => {
  return (
    <div className="mb-4">
      <MealCard id={id} name={name} price={price} description={description} />
    </div>
  );
};

export default MealItem;
