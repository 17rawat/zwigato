import React from "react";

export const Card = (props) => {
  return (
    <div className=" m-2 bg-white rounded-lg shadow-md p-4">
      {props.children}
    </div>
  );
};
