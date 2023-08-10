import Header from "./components/layout/Header";

import { useState } from "react";
import Meals from "./components/Meal/Meals";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHide={hideCartHandler} />}

      <Header onShow={showCartHandler} />

      <main>
        {" "}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
