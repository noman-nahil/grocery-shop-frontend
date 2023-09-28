import React, { useEffect, useState } from "react";

import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="mx-16 my-10">
      <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
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
