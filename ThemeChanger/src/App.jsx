import React, { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen flex items-center justify-center`}
    >
      <button
        onClick={handleClick}
        className="px-6 py-3 rounded-lg text-lg font-semibold shadow-md 
                   bg-blue-500 text-white 
                   hover:bg-blue-600 active:scale-95 
                   transition-all duration-200"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default App;
