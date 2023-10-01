import React, { useState } from "react";
import Body from "./components/body";
import Navbar from "./components/navbar";

function App() {
  const [numberOfCartItems, setNumberOfCartItems] = useState(
    parseInt(localStorage.getItem("numberOfCartItems  ") || 0)
  );
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const updateCart = () => {
    setNumberOfCartItems(numberOfCartItems + 1);
    localStorage.setItem("numberOfCartItems  ", numberOfCartItems + 1);
    setCartItem(JSON.parse(localStorage.getItem("cartItems")));
  };

  const removeCart = () => {
    setNumberOfCartItems(0);
  };
  const removeItem = () => {
    setNumberOfCartItems(numberOfCartItems - 1);
    localStorage.setItem("numberOfCartItems  ", numberOfCartItems - 1);
    setCartItem(JSON.parse(localStorage.getItem("cartItems")));
  };
  return (
    <>
      <Navbar
        numberOfCartItems={numberOfCartItems}
        cartItem={cartItem}
        removeCart={removeCart}
        removeItem={removeItem}
      />
      <Body updateCart={updateCart} />
    </>
  );
}

export default App;
