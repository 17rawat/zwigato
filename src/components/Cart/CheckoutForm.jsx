import React, { useContext, useRef, useState } from "react";

import CartContext from "../../store/cart-context";

const CheckOutForm = ({ onCancel, onConfirm }) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const contactNoInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const address = addressInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;
    const contactNo = contactNoInputRef.current.value;

    if (
      name.trim() === "" ||
      address.trim() === "" ||
      postalCode.trim() === "" ||
      city.trim() === "" ||
      contactNo.trim() === ""
    ) {
      setFormIsValid(false);
      return;
    }

    const userInfo = {
      name,
      address,
      postalCode,
      city,
      contactNo,
    };

    onConfirm(userInfo);

    // console.log(userInfo);
  };

  return (
    <form className=" mx-auto  w-full" onSubmit={confirmHandler}>
      <div className="overflow-y-auto max-h-60">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            ref={addressInputRef}
            type="text"
            id="street"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postal"
            className="block text-sm font-medium text-gray-700"
          >
            Postal Code
          </label>
          <input
            ref={postalCodeInputRef}
            type="text"
            id="postal"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            ref={cityInputRef}
            type="text"
            id="city"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile no"
            className="block text-sm font-medium text-gray-700"
          >
            Contact No
          </label>
          <input
            ref={contactNoInputRef}
            type="text"
            id="mobile no"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
      </div>

      {!formIsValid && (
        <p className="text-red-500 mt-2">Please fill out all fields.</p>
      )}

      <div className="flex mt-2 justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
