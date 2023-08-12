import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealCard = ({ id, name, description, price, rating }) => {
  const roundOfprice = `$${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <div className="flex bg-white border border-gray-300 rounded-lg shadow-md p-4">
      <div className="flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>

          <div className="text-gray-600">{description}</div>
          <div className="flex items-center mt-2">
            <div className="bg-green-500 text-white rounded-full p-1.5 flex items-center">
              <span className=" text-xs ">★ {rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="text-purple-600 font-semibold mt-2">
            {roundOfprice}
          </div>
        </div>
      </div>

      <div className="ml-4">
        <MealItemForm addToCart={addToCart} />
      </div>
    </div>
  );
};

export default MealCard;
