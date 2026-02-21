import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl text-center w-[300px]">
        <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>

        <p className="text-4xl font-mono mb-6 tracking-wider">
          {formatTime()}
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={handleStop}
            className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-600 transition"
          >
            Stop
          </button>

          <button
            onClick={handleReset}
            className="bg-yellow-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-yellow-600 transition"
          >
            Reset
          </button>

          <button
            onClick={handleStart}
            className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
