import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  const noOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-lg relative flex items-center space-x-2 hover:bg-blue-600 focus:outline-none"
      onClick={onClick}
    >
      <CartIcon />
      {noOfCartItems > 0 && (
        <span className="bg-red-500 text-white rounded-full text-xs p-1  absolute -top-1 -right-1">
          {noOfCartItems}
        </span>
      )}
    </button>
  );
};

export default HeaderCartButton;
