import React, { useState } from "react";

const App = () => {
  const [leftList, setLeftList] = useState([
    "React",
    "Express",
    "Node",
    "Word",
    "MS Office",
    "MongoDB",
    "Databases",
  ]);

  const [rightList, setRightList] = useState([]);

  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const handleSelectedLeft = (item) => {
    setSelectedLeft((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSelectedRight = (item) => {
    setSelectedRight((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const moveRight = () => {
    setRightList([...rightList, ...selectedLeft]);
    setLeftList(leftList.filter((i) => !selectedLeft.includes(i)));
    setSelectedLeft([]);
  };

  const moveLeft = () => {
    setLeftList([...leftList, ...selectedRight]);
    setRightList(rightList.filter((i) => !selectedRight.includes(i)));
    setSelectedRight([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
      <div className="flex items-center gap-10">
        {/* left list */}
        <div className="bg-blue-700 text-white font-semibold rounded-xl w-[230px] shadow-lg p-4">
          <h1 className="bg-blue-900 text-center py-2 rounded mb-2">
            Left List
          </h1>
          <ul className="space-y-2">
            {leftList.map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded cursor-pointer transition 
                ${
                  selectedLeft.includes(item)
                    ? "bg-blue-900 shadow border border-blue-300"
                    : "hover:bg-blue-600"
                }`}
                onClick={() => handleSelectedLeft(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={moveRight}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold border rounded-xl shadow px-6 py-2"
          >
            Move Right →
          </button>

          <button
            onClick={moveLeft}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold border rounded-xl shadow px-6 py-2"
          >
            ← Move Left
          </button>
        </div>

        {/* right list */}
        <div className="bg-red-700 text-white font-semibold rounded-xl w-[230px] shadow-lg p-4">
          <h1 className="bg-red-900 text-center py-2 rounded mb-2">
            Right List
          </h1>
          <ul className="space-y-2">
            {rightList.map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded cursor-pointer transition 
                ${
                  selectedRight.includes(item)
                    ? "bg-red-900 shadow border border-red-300"
                    : "hover:bg-red-600"
                }`}
                onClick={() => handleSelectedRight(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
