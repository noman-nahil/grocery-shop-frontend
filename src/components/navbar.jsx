import React, { useState } from "react";
import logo from "../logo192.png";
import Cart from "./cart/cart";
import OrderSuccess from "./cart/orderSuccessful";

const Navbar = ({ cartItem, removeCart, numberOfCartItems, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccessful, setSuccesful] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const placeOrder = () => {
    setIsCartOpen(false);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("numberOfCartItems  ");
    removeCart();
    setSuccesful(true);
    setTimeout(() => {
      setSuccesful(false);
    }, 1500);
  };
  const orderMsgHide = () => {
    setSuccesful(false);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img className="h-10" src={logo} alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Grocery Shop
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden text-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            isOpen
              ? "w-full block md:w-auto"
              : "w-full hidden md:w-auto md:block"
          }
          id="navbar-default"
        >
          <ul className="mr-6 font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-gray-50 rounded  md:border-0  md:p-0"
                onClick={toggleCart}
              >
                <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {numberOfCartItems}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isCartOpen && (
        <Cart
          toggleCart={toggleCart}
          placeOrder={placeOrder}
          cartItem={cartItem}
          removeItem={removeItem}
        />
      )}
      {isSuccessful && (
        <OrderSuccess
          orderSuccessful={isSuccessful}
          orderMsgHide={orderMsgHide}
        />
      )}
    </nav>
  );
};

export default Navbar;
