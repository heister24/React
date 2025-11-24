import React, { useState } from "react";

const App = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1763306454161-2587c3791de3?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1763115826776-cfeac9c3e86b?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1759818319027-dc631ed9732b?w=600&auto=format&fit=crop&q=60",
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-white font-bold mb-6">Carousel</h1>

      <div className="relative w-[350px] h-[250px] sm:w-[450px]  overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-500 rounded-xl"
        />

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full shadow-md transition"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full shadow-md transition"
        >
          ❯
        </button>
      </div>

      {/* Add for more beautiful ui */}
      {/* <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default App;
