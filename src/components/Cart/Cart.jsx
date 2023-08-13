import React, { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOutForm from "./CheckoutForm";

import axios from "axios";

const Cart = ({ onHide }) => {
  const [isCheckOut, setIsCheckOut] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOrderConfirmed, setOrderConfirmed] = useState(false);

  const cartCtx = useContext(CartContext);

  // console.log(cartCtx.items);

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

  const handleCheckOut = () => {
    setIsCheckOut(true);
  };

  const orderSubmitHandler = async (userInfo, paymentInfo) => {
    setIsSubmitting(true);
    await axios.post(
      "https://zwigato-c9665-default-rtdb.firebaseio.com/orders.json",
      {
        user: userInfo,
        orderedItems: cartCtx.items,
        paymentDetails: paymentInfo,
      }
    );

    setIsSubmitting(false);

    setOrderConfirmed(true);

    cartCtx.clearCart();
  };

  const modalAction = (
    <Fragment>
      <div className="p-4">
        {cartItems}

        {cartCtx.items.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty
          </p>
        ) : (
          <div className="p-4 flex justify-between items-center">
            <span className="text-lg">Total:</span>
            <span className="text-lg font-bold">{totalAmount}</span>
          </div>
        )}
      </div>

      {isCheckOut && (
        <CheckOutForm onCancel={onHide} onConfirm={orderSubmitHandler} />
      )}

      {!isCheckOut && (
        <div className="p-4 flex justify-center">
          <button
            onClick={onHide}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Close
          </button>

          {hasItems && (
            <button
              onClick={handleCheckOut}
              className="bg-green-500 text-white px-4 py-2 ml-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Order Now
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
  return (
    <Modal>
      {!isOrderConfirmed && !isSubmitting && modalAction}

      {isSubmitting && (
        <p className="text-center text-gray-500">
          Placing your order. Please wait...
        </p>
      )}

      {isOrderConfirmed && !isSubmitting && (
        <Fragment>
          <p className="text-center text-green-500 text-lg">
            Order successfully placed!! Thank you for your order.
          </p>

          <div className="flex justify-center mt-4">
            <button
              onClick={onHide}
              className="m-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </Fragment>
      )}
    </Modal>
  );
};

export default Cart;
