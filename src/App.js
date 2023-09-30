import React, { useState } from "react";
import Body from "./components/body";
import Navbar from "./components/navbar";

function App() {
  const [cartItem, setCartItem] = useState(
    parseInt(localStorage.getItem("numberOfCartItems  ") || 0)
  );
  const updateCart = () => {
    setCartItem(cartItem + 1);
    localStorage.setItem("numberOfCartItems  ", cartItem + 1);
  };
  return (
    <>
      <Navbar cartItem={cartItem} />
      <Body updateCart={updateCart} />
    </>
  );
}

export default App;
