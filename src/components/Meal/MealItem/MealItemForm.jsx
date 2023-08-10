import React from "react";

const MealItemForm = () => {
  return (
    <form className="flex items-center">
      <label className="mr-2">Amount</label>
      <input
        className="border border-gray-300 rounded px-2 py-1 w-20"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button className="bg-purple-600 text-white rounded px-3 py-1 ml-2 hover:bg-purple-700 focus:outline-none">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
