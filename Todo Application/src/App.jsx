import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    if (input.trim() === "") return alert("Please add something");
    const newTask = {
      text: input,
      complete: false,
    };
    setTask([...task, newTask]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updateTasks = task.map((item, i) =>
      i === index ? { ...item, complete: !item.complete } : item
    );
    setTask(updateTasks);
  };

  const handleDelete = (index) => {
    const remainingTasks = task.filter((_, i) => i !== index);
    setTask(remainingTasks);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-2">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          To-Do Application
        </h1>

        {/* Input Box */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {task.length === 0 ? (
            <p className="text-gray-500 text-center py-4 text-lg">
              No Task Added Yet...
            </p>
          ) : (
            task.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={() => toggleTask(index)}
                    className="w-5 h-5 accent-blue-600"
                  />

                  <span
                    className={`text-lg ${
                      item.complete
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition shadow"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
