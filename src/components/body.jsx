import React, { useEffect, useState } from "react";

import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Make a GET request to your server to fetch grocery products
    axios
      .get("http://localhost:3000/product/")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const searchHandle = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-4 my-4md:mx-16 md:my-10">
      <input
        type="text"
        id="search-navbar"
        className="block  lg:w-1/3 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg mb-5 mx-auto mt-4"
        placeholder="Search..."
        onChange={searchHandle}
      />
      <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            className="max-w-sm  rounded overflow-hidden shadow-lg"
            key={product.id}
          >
            <div className="h-fit">
              <img
                className="h-44 md:h-48 lg:h-52 xl:h-56  mx-auto"
                src={product.link}
              />
            </div>
            <div className="px-6 pt-4 pb-2  ">
              <div className="flex">
                <p className="font-bold w-1/2">{product.name}</p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm ml-auto  p-2 "
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
