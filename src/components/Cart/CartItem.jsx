import React from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b py-3">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <div className="ml-4">
          <span className="text-gray-600 ">{price}</span>
          <span className="text-gray-600 ml-2 border rounded px-1 py-1 border-gray-300">
            x {props.amount}
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={props.onRemove}
          className="text-red-500 hover:text-red-600 focus:outline-none border border-red-500 rounded px-2 py-1"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="text-green-500 hover:text-green-600 focus:outline-none border border-green-500 rounded px-2 py-1 ml-1"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
