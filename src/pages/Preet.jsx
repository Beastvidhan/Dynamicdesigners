import React from "react";
import { useNavigate } from "react-router-dom";


const Preet = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black px-6 sm:px-16 py-20">

     
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl 
      shadow-xl p-10 flex flex-col md:flex-row gap-10">

         <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-3xl font-bold text-gray-400 hover:text-red-500"
      >
        ✕
      </button>

        {/* Profile Image */}
        <div className="flex-shrink-0 text-center">
          <img 
            src="https://res.cloudinary.com/dndfx6ulv/image/upload/v1769770815/preet_n973jq.png"
            alt="Preet Choudhary"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 mx-auto"
          />
        </div>

        {/* Info */}
        <div className="flex-1">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Preet Choudhary
          </h1>

          <p className="text-indigo-500 font-medium mt-1">
            Team Leader & Presenter
          </p>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            Preet is the driving force behind Dynamic Designers, leading hackathon projects,
            coordinating team efforts, and presenting innovative solutions with confidence.
            Passionate about web development, leadership, and building impactful digital products.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[ "Leadership", "Presentation", "Team Management"].map(skill => (
              <span 
                key={skill}
                className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 
                text-indigo-600 dark:text-indigo-300 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Preet;
