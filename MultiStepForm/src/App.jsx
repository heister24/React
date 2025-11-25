import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between mb-6">
          <div
            className={`${
              step === 1 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            Basic Details
          </div>
          <div
            className={`${
              step === 2 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            Pricing
          </div>
          <div
            className={`${
              step === 3 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            Inventory
          </div>
        </div>

        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Product Name"
              value={formData.name}
              onChange={handleOnChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="description"
              placeholder="Enter Product Description"
              value={formData.description}
              onChange={handleOnChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className="space-y-4"
          >
            <input
              type="number"
              name="price"
              placeholder="Enter Product Price"
              value={formData.price}
              onChange={handleOnChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="discount"
              placeholder="Enter Product Discount"
              value={formData.discount}
              onChange={handleOnChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              name="stock"
              placeholder="Enter Product Stock"
              value={formData.stock}
              onChange={handleOnChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
