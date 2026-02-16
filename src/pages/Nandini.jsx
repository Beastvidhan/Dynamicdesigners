import React from "react";
import { useNavigate } from "react-router-dom";


const Nandini = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black px-6 sm:px-16 py-20">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10">

         <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-3xl font-bold text-gray-400 hover:text-red-500"
      >
        ✕
      </button>

        <img 
          src="https://res.cloudinary.com/dndfx6ulv/image/upload/v1769770815/nandini_hqxwf9.png"
          className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold">Nandini</h1>
          <p className="text-indigo-500 mt-1">Senior Writer</p>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
           Nandini turns ideas into impactful stories that connect and convert.
           Driving engagement through strategic storytelling.
           Crafting words that build brands and inspire audiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["storytelling", "clarity of thought", "content impact", "audience engagement", "Accessibility"].map(skill => (
              <span key={skill} className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 
                text-indigo-600 dark:text-indigo-300 text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nandini;
