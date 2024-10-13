import React, { useState } from "react";
import { FaPlusCircle, FaCheck } from "react-icons/fa";
import "./Playlist.css";
import CPList from "./CPList";

const PlayList = ({ movies, addMovieToPlaylist, playlist }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [playlist, setPlaylist] = useState([]);

  //   const openModal = (movie) => {
  //     if (!playlist.includes(movie)) {
  //       setPlaylist((prev) => [...prev, movie]);
  //       setIsModalOpen(true);
  //     }
  //   };

  //   const closeModal = (movieToRemove) => {
  //     // Remove movie from playlist
  //     if (movieToRemove) {
  //       setPlaylist(playlist.filter((m) => m !== movieToRemove));
  //     }
  //     setIsModalOpen(false); // Close the modal
  //   };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const confirmPlaylist = () => {
    // Handle playlist confirmation logic here
    console.log("Playlist confirmed:", playlist);
    setIsModalOpen(false); // Close modal after confirmation
  };

  const handleAddMovie = (movie) => {
    // Add the movie to the playlist and then open the modal
    addMovieToPlaylist(movie);
    openModal(); // Open the modal when a movie is added
  };

  if (!Array.isArray(movies)) {
    return <p>No movies found.</p>; // Display a message if movies is not an array
  }

  return (
    <>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          <div className="movies-container">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="movie-item">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <h3 className="movie-title">{movie.Title}</h3>

                  {playlist.includes(movie) ? (
                    <button
                      className="add-button"
                      onClick={() => addMovieToPlaylist(movie)}
                    >
                      <FaCheck />
                    </button>
                  ) : (
                    <button
                      className="add-button"
                      onClick={() => handleAddMovie(movie)}
                    >
                      <FaPlusCircle />
                    </button>
                  )}
                </div>
                <p className="movie-year">{movie.Year}</p>{" "}
                {/* Year below title */}
              </div>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && (
        <CPList
          movies={playlist}
          onClose={closeModal}
          onConfirm={confirmPlaylist}
        />
      )}
    </>
  );
};

export default PlayList;
