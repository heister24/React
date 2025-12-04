import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = res.data;
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("https://fakestoreapi.com/products");
  //       const data = await res.json();
  //       // console.log(data);
  //       setProducts(data);
  //       // setFiltered(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(true);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const applyFilter = () => {
      let temp = products;

      if (category != "All") {
        temp = temp.filter((item) => item.category == category);
      }

      if (minPrice) {
        temp = temp.filter((item) => item.price >= Number(minPrice));
      }

      if (maxPrice) {
        temp = temp.filter((item) => item.price <= Number(maxPrice));
      }

      setFilteredProducts(temp);
    };
    applyFilter();
  }, [maxPrice, minPrice, category]);

  // const applyFilter = () => {
  //   let temp = products;

  //   if (category != "All") {
  //     temp = temp.filter((item) => item.category == category);
  //   }

  //   if (minPrice) {
  //     temp = temp.filter((item) => item.price >= Number(minPrice));
  //   }

  //   if (maxPrice) {
  //     temp = temp.filter((item) => item.price <= Number(maxPrice));
  //   }

  //   setFilteredProducts(temp);
  // };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

      {/* Filters */}
      <div className="flex gap-4 justify-center mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded bg-white"
        >
          <option value="All">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded bg-white"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded bg-white"
        />

        {/* <button
          onClick={applyFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Filter
        </button> */}
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(filteredProduct.length ? filteredProduct : products).map(
            (item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <p className="font-semibold text-lg mb-2">{item.title}</p>
                <p className="text-blue-600 font-bold text-xl mb-1">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                <p className="text-gray-500 text-sm">
                  {item.description.slice(0, 80)}...
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default App;
