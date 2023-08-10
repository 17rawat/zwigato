import Header from "./components/layout/Header";

import { Fragment, useState } from "react";
import Meals from "./components/Meal/Meals";

import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onHide={hideCartHandler} />}

      <Header onShow={showCartHandler} />

      <main>
        {" "}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
