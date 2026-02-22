// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 5;

//   useEffect(() => {
//     const fetchMoviesData = async () => {
//       const res = await axios.get("https://ghibliapi.vercel.app/films");
//       const data = res.data;
//       setMovies(data);
//     };
//     fetchMoviesData();
//   }, []);

//   const lastMovieIndex = currentPage * moviesPerPage;
//   const firstMovieIndex = lastMovieIndex - moviesPerPage;
//   const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

//   const totalPages = Math.ceil(movies.length / moviesPerPage);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">🎬 Movies List</h1>

//       {/* Movies List */}
//       <div className="space-y-6">
//         {currentMovies.map((movie) => (
//           <div
//             key={movie.id}
//             className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white"
//           >
//             <div className="flex gap-5">
//               <img
//                 className="w-40 h-56 object-cover rounded-md"
//                 src={movie.image}
//                 alt={movie.title}
//               />

//               <div className="space-y-1">
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p className="text-gray-700">
//                   <strong>Original Title:</strong> {movie.original_title}
//                 </p>
//                 <p className="text-gray-700">
//                   <strong>Director:</strong> {movie.director}
//                 </p>
//                 <p className="text-gray-700">
//                   <strong>Producer:</strong> {movie.producer}
//                 </p>
//                 <p className="text-gray-700">
//                   <strong>Description:</strong>{" "}
//                   {movie.description.slice(0, 100)}...
//                 </p>
//                 <p className="text-gray-700">
//                   <strong>Release Date:</strong> {movie.release_date}
//                 </p>
//                 <p className="text-gray-700">
//                   <strong>Running Time:</strong> {movie.running_time} mins
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="flex justify-center gap-2 mt-8">
//         <button
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
//           onClick={() => setCurrentPage(currentPage - 1)}
//         >
//           Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-4 py-2 border rounded-md ${
//               currentPage === i + 1
//                 ? "bg-blue-600 text-white border-blue-600"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;








import React, { useState } from "react";

const users = [
  { id: 1, name: "Aarav Sharma", age: 22, city: "Delhi" },
  { id: 2, name: "Riya Patel", age: 24, city: "Mumbai" },
  { id: 3, name: "Kabir Singh", age: 28, city: "Jaipur" },
  { id: 4, name: "Neha Gupta", age: 21, city: "Kolkata" },
  { id: 5, name: "Arjun Mehta", age: 27, city: "Pune" },
  { id: 6, name: "Simran Kaur", age: 23, city: "Chandigarh" },
  { id: 7, name: "Rohan Verma", age: 26, city: "Hyderabad" },
  { id: 8, name: "Sanya Malhotra", age: 25, city: "Bangalore" },
  { id: 9, name: "Manish Yadav", age: 29, city: "Surat" },
  { id: 10, name: "Priya Singh", age: 22, city: "Lucknow" },
  { id: 11, name: "Vikram Rao", age: 30, city: "Ahmedabad" },
  { id: 12, name: "Ishita Das", age: 20, city: "Guwahati" },
  { id: 13, name: "Yash Thakur", age: 23, city: "Bhopal" },
  { id: 14, name: "Kritika Jain", age: 28, city: "Indore" },
  { id: 15, name: "Dev Sharma", age: 26, city: "Varanasi" },
  { id: 16, name: "Pooja Raj", age: 24, city: "Patna" },
  { id: 17, name: "Aman Singh", age: 27, city: "Udaipur" },
  { id: 18, name: "Sneha Kapoor", age: 22, city: "Jodhpur" },
  { id: 19, name: "Nikhil Kumar", age: 25, city: "Nagpur" },
  { id: 20, name: "Meera Soni", age: 21, city: "Kanpur" },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 3;

  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const totalPages = Math.ceil(users.length / userPerPage);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">👤 Users List</h1>

      {/* USER CARDS */}
      <div className="space-y-4">
        {currentUsers.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700">Age: {user.age}</p>
            <p className="text-gray-700">City: {user.city}</p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
