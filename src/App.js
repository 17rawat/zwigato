import Header from "./components/layout/Header";
import { useState } from "react";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/layout/Footer";

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

      <div className="flex flex-col min-h-screen">
        <header>
          <Header onShow={showCartHandler} />
        </header>

        <main className="flex-grow overflow-y-auto">
          <Meals />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
