import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShow }) => {
  return (
    <Fragment>
      <header className=" m-2 bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Zwigato</h1>
        <HeaderCartButton onClick={onShow} />
      </header>
    </Fragment>
  );
};

export default Header;
