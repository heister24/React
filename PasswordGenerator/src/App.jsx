import React, { useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(6);

  useEffect(() => {
    const generatePassword = () => {
      let pass = "";
      let str = "qwertyuioopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM";

      if (numbersAllowed) {
        str += "1234567890";
      }

      if (charAllowed) {
        str += "!@#$%^&*()_+~";
      }

      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }
      setPassword(pass);
    };
    generatePassword();
  }, [numbersAllowed, charAllowed, length, setPassword]);

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password);
    alert("Password Copied");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-[350px] text-white">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-lg bg-gray-700 outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Copy
          </button>
        </div>

        {/* Range Slider */}
        <div className="mb-4">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-blue-500"
          />
          <label className="text-sm">Length: {length}</label>
        </div>

        {/* Checkbox Options */}
        <div className="flex items-center gap-3 mb-3">
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={() => setNumbersAllowed((prev) => !prev)}
            className="h-4 w-4"
          />
          <label className="text-sm">Include Numbers</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="h-4 w-4"
          />
          <label className="text-sm">Include Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
