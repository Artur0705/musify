import React from "react";

const Error = () => {
  return (
    // Container that centers its content both horizontally and vertically
    <div className="w-full flex justify-center items-center">
      // Displaying an error message in bold, large white text
      <h1 className="font-bold tex-2xl text-white mt-2">
        Oops, something went wrong. Please try again.
      </h1>
    </div>
  );
};

export default Error;
