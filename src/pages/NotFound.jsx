
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import errorBg from "../assets/33.png"; 

export default function NotFound() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
   const timer = setTimeout(() => {
   setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
   <div className="min-h-screen flex items-center justify-center bg-gray-700">
   <div className="flex flex-col items-center text-white">
     <span className="loading loading-bars loading-lg mb-4"></span>
    <p className="text-xl font-semibold">Loading error page...</p>
   </div>
    </div>
    );
  }

  return (
   <div
  className="min-h-screen flex flex-col items-center justify-center text-white p-4 bg-cover bg-center"
   style={{ backgroundImage: `url(${errorBg})` }}
    >
   <Link
    to="/"
 className="bg-blue-500 hover:bg-red-500 text-white px-6 py-3 rounded-md transition duration-300 mt-120"
    > !!! Go Home !!! </Link>
  </div>
  );
}
