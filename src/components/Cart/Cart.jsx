import React from "react";
import Modal from "../UI/Modal";

const Cart = ({ onHide }) => {
  return (
    <Modal>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Item 1</span>
            <span>$10.00</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Item 2</span>
            <span>$15.00</span>
          </li>
        </ul>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span>Total:</span>
        <span className="font-bold">$25.00</span>
      </div>
      <div className="p-4 flex justify-end">
        <button
          onClick={onHide}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>

        <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded">
          Order Now
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
