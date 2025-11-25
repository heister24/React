import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleStart = () => {
    if (!minutes && !seconds) return;
    const totalSeconds = Number(minutes) * 60 + Number(seconds);

    if (totalSeconds <= 0) return;

    setTime(totalSeconds);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setMinutes("");
    setSeconds("")
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) setIsRunning(false);

    return () => clearInterval(timer);
  });

  // this also work
  //   useEffect(()=>{
  //   let timer;
  //   if(isRunning && time > 0){
  //     timer = setTimeout(() => {
  //       setTime(time - 1)
  //     }, 1000);
  //   }

  //   if(time === 0) setIsRunning(false)

  //   return () => clearTimeout(timer)
  // })

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-[#08162B] flex items-center justify-center p-5">
      <div className="bg-[#102948] p-6 rounded-xl shadow-lg w-full max-w-sm text-center text-white">
        <h1 className="text-3xl font-bold mb-4">CountDown Application</h1>

        <p className="text-5xl font-extrabold text-green-400 mb-6">
          {formatTime()}
        </p>

        <input
          type="number"
          placeholder="Enter Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-[#0B1E36] text-white placeholder-gray-400 border border-gray-500 mb-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="Minutes" className="text-gray-300 text-sm mb-4 block">
          Minutes
        </label>

        <input
          type="number"
          placeholder="Enter Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-[#0B1E36] text-white placeholder-gray-400 border border-gray-500 mb-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="Minutes" className="text-gray-300 text-sm mb-4 block">
          Seconds
        </label>

        <div className="flex gap-5">
          <button
            className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg shadow transition"
            onClick={handleStart}
          >
            Start
          </button>

          <button
            className="text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg shadow transition"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
