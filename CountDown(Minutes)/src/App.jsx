import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (!minutes) return;
    if (!isRunning) {
      setTime(minutes * 60);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setMinutes("");
  };

  useEffect(() => {
    let timer;
    if (time > 0 && isRunning) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }
    if (time === 0) setIsRunning(false);

    return () => clearTimeout(timer);
  }, [time, isRunning]);

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-red-700 p-8 rounded-2xl text-center shadow-xl w-[300px]">
        <h1 className="text-white font-bold text-2xl mb-4">CountDown App</h1>

        <p className="text-black font-bold text-3xl bg-white py-2 rounded-xl shadow-lg mb-5">
          {formatTime()}
        </p>

        <input
          type="number"
          placeholder="Enter Minutes"
          className="bg-gray-800 text-white p-2 rounded-xl w-full outline-none text-center mb-4 placeholder-gray-400 border border-gray-600"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={handleReset}
            className="w-1/2 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-xl font-semibold transition"
          >
            Reset
          </button>

          <button
            onClick={handleStart}
            className="w-1/2 bg-green-600 hover:bg-green-500 text-white py-2 rounded-xl font-semibold transition"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
