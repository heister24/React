import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await axios.get(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = res.data;
      setCurrencies(Object.keys(data.rates));
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchRate = async () => {
      const res = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const data = res.data;
      setRate(data.rates[to]);
    };
    fetchRate();
  }, [from, to]);

  const convert = () => {
    if (rate) {
      setResult((amount * rate).toFixed(2));
    }
  };

  const swapCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        <div className="flex flex-col mb-4">
          <label className="font-medium">Amount</label>
          <input
            className="max-w-[200px] border rounded p-2 mt-1 shadow-sm"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-medium">From</label>
          <select
            className="border p-2 rounded shadow-sm mt-1"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((cur, index) => (
              <option value={cur} key={index}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-medium">To</label>
          <select
            className="border p-2 rounded shadow-sm mt-1"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {currencies.map((cur, index) => (
              <option value={cur} key={index}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 mt-3">
          <button
            onClick={swapCurrencies}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Swap
          </button>

          <button
            onClick={convert}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Convert
          </button>
        </div>

        <div className="mt-5 text-center text-xl font-semibold text-green-700">
          {result && <p>{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
