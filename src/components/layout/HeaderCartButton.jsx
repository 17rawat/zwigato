import React from "react";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded flex items-center"
      onClick={onClick}
    >
      <span className="mr-2">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="bg-red-500 text-white rounded-full p-1 ml-2">5</span>
    </button>
  );
};

export default HeaderCartButton;
