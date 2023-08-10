import React from "react";
import MealItemForm from "./MealItemForm";

const MealCard = ({ name, description, price }) => {
  const roundOfprice = `$${price.toFixed(2)}`;

  return (
    <div className="flex bg-white border border-gray-300 rounded-lg shadow-md p-4">
      <div className="flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="text-gray-600">{description}</div>
          <div className="text-purple-600 font-semibold mt-2">
            {roundOfprice}
          </div>
        </div>
      </div>

      <div className="ml-4">
        <MealItemForm />
      </div>
    </div>
  );
};

export default MealCard;
