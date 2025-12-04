import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    if (count > 0) {
      setCount(0);
    }
  };
  return (
    <div className="flex bg-[#090721] min-h-screen items-center justify-center">
      <div className="bg-white rounded-xl p-10 w-[300px]">
        <h1 className="text-xl text-center font-semibold">Counter App</h1>
        <p className="text-center text-xl font-bold text-blue-500 mt-2">
          Count: <span className="text-red-600">{count}</span>
        </p>
        <div className="flex justify-center mt-5 gap-5">
          <button
            className="bg-green-700 text-white font-bold text-sm rounded p-3"
            onClick={handleIncrease}
          >
            Increase
          </button>
          <button
            className="bg-gray-700 text-white font-bold text-sm rounded p-3"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-red-700 text-white font-bold text-sm rounded p-3"
            onClick={handleDecrease}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
