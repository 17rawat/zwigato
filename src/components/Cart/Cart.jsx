import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="space-y-4 overflow-y-auto max-h-60">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // console.log(cartItems);

  return (
    <Modal>
      <div className="p-4">{cartItems}</div>
      <div className="p-4 flex justify-between items-center">
        <span className="text-lg">Total:</span>
        <span className="text-lg font-bold">{totalAmount}</span>
      </div>
      <div className="p-4 flex justify-end">
        <button
          onClick={onHide}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Continue Shopping
        </button>

        {hasItems && (
          <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded hover:bg-green-600 focus:outline-none">
            Order Now
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
