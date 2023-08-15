import React from "react";
import { loader } from "../assets"; // Importing loader image asset

const Loader = ({ title }) => {
  return (
    // Container that centers its content both horizontally and vertically
    <div className="w-full flex justify-center items-center flex-col">
      {/* Displaying a loader image */}
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      {/* Displaying a loading message or a custom message if provided via the
      'title' prop */}
      <h1 className="font-bold tex-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  );
};

export default Loader;
