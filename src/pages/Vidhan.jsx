import React from "react";
import { useNavigate } from "react-router-dom";



const Vidhan = () => {

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
          src="https://res.cloudinary.com/dndfx6ulv/image/upload/v1769770816/vidhan_zx5fyj.png"
          className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold">Vidhan Singh</h1>
          <p className="text-indigo-500 mt-1">Full Stack Developer</p>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            Vidhan specializes in building fast, scalable web apps using React,
            Node.js and modern tools. He handles both frontend and backend systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "APIs", "Tailwind"].map(skill => (
              <span key={skill} className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 
                text-indigo-600 dark:text-indigo-300 text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vidhan;
