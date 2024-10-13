import React, { useState } from "react";

const MovieSearch = ({ setMovies }) => {
  const [query, setQuery] = useState("");
  const searchMovies = async () => {
    // Replace with actual API call when needed
    const mockMovies = [
      { Title: "The Matrix" },
      { Title: "Inception" },
      { Title: "Interstellar" },
    ];
    setMovies(mockMovies);
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default MovieSearch;
