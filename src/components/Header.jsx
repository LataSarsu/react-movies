import React, { useState } from "react";
import "./Header.css";

const Header = ({ setMovies, openMyList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Only call API if the search term is not empty
    if (value.trim() === "") {
      setMovies([]); // Clear movies if input is empty
      return;
    }

    setIsLoading(true); // Set loading to true

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${value}&apikey=2fd6e209`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Clear movies on error
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <header className="header">
      <div className="left">
        <h1>Demo</h1>
      </div>

      <div className="right">
        <button className="list-btn" onClick={openMyList}>My List</button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for movies..."
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;
