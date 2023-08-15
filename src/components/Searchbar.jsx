import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

// The Searchbar component is responsible for allowing the user to input a search term
// and navigate to the search results for that term.
const Searchbar = () => {
  // Use the useNavigate hook from react-router to programmatically change routes
  const navigate = useNavigate();

  // Local state for managing the user's input in the search bar
  const [searchTerm, setTermSearch] = useState("");

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate(`/search/${searchTerm}`); // Navigate to the search results route with the given search term
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      {/* {Accessibility label for screen readers} */}
      <label htmlFor="search-field" className="sr-only">
        Search All Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        {/* {  Search icon from react-icons} */}
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          type="search"
          id="search-field"
          placeholder="Search..."
          value={searchTerm}
          // Update the searchTerm state whenever the input value changes
          onChange={(e) => setTermSearch(e.target.value)}
          className="flex-1
           bg-transparent
           border-none
           outline-none
          placeholder-gray-500
           text-base
          text-white
           p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
