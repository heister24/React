import React, { useState } from "react";

const App = () => {
  const fruits = [
    "apple",
    "banana",
    "mango",
    "orange",
    "pineapple",
    "strawberry",
    "grapes",
    "watermelon",
  ];

  const [input, setInput] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <input
        type="text"
        value={input}
        placeholder="Search fruit..."
        onChange={(e) => setInput(e.target.value)}
        className="mb-5 w-72 px-4 py-2 border border-gray-400 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="bg-white w-72 shadow-lg rounded-lg p-4">
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => (
            <li
              key={index}
              className="py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
            >
              {fruit}
            </li>
          ))
        ) : (
          <p className="text-red-500 text-center font-semibold">
            No result Found
          </p>
        )}
      </ul>
    </div>
  );
};

export default App;
