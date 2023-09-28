import React, { useState } from "react";
import logo from "../logo192.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <ul className="mr-6 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <button className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
