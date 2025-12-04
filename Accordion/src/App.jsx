// Without Button
// import React, { useState } from "react";

// const App = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const data = [
//     {
//       title: "What is React?",
//       content:
//         "React is a JavaScript library used to build fast and interactive user interfaces, mainly for single-page applications.",
//     },
//     {
//       title: "What is an Accordion component?",
//       content:
//         "An Accordion is a UI component that lets users expand and collapse sections to view or hide content.",
//     },
//     {
//       title: "Why do we use an Accordion?",
//       content:
//         "Accordions help keep the UI clean by organizing content into expandable sections, reducing scrolling and improving user experience.",
//     },
//     {
//       title: "Where are Accordions commonly used?",
//       content:
//         "Accordions are commonly used in FAQs, settings pages, forms, dashboards, and mobile apps where space must be managed efficiently.",
//     },
//   ];

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto mt-10">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="border border-gray-300 rounded mb-3 overflow-hidden"
//         >
//           <div
//             onClick={() => toggle(index)}
//             className="px-4 py-3 bg-gray-100 cursor-pointer font-semibold text-gray-800 hover:bg-gray-200 transition"
//           >
//             {item.title}
//           </div>

//           {openIndex === index && (
//             <div className="px-4 py-3 bg-white text-gray-700">
//               {item.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

//With Button

import React, { useState } from "react";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library used to build fast and interactive user interfaces, mainly for single-page applications.",
    },
    {
      title: "What is an Accordion component?",
      content:
        "An Accordion is a UI component that lets users expand and collapse sections to view or hide content.",
    },
    {
      title: "Why do we use an Accordion?",
      content:
        "Accordions help keep the UI clean by organizing content into expandable sections, reducing scrolling and improving user experience.",
    },
    {
      title: "Where are Accordions commonly used?",
      content:
        "Accordions are commonly used in FAQs, settings pages, forms, dashboards, and mobile apps where space must be managed efficiently.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded mb-3 overflow-hidden shadow-sm"
        >
          <div className="px-4 py-3 bg-gray-100 font-semibold text-gray-800 flex justify-between items-center">
            <span>{item.title}</span>

            <button
              onClick={() => toggle(index)}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              {openIndex === index ? "Hide" : "Show"}
            </button>
          </div>

          {openIndex === index && (
            <div className="px-4 py-3 bg-white text-gray-700 border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
