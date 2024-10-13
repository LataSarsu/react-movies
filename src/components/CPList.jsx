import React from "react";
import "./CPList.css";
import { FaTimes } from "react-icons/fa"; // Import close icon

const CPList = ({ movies, onClose, onConfirm, removeFromPlaylist }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-heading">
          <h2>My List</h2>
        </div>
        <div className="movie-list">
          {" "}
          {/* Added movie-list container */}
          {movies.length === 0 ? (
            <h3>No movies in the playlist.</h3>
          ) : (
            movies.map((movie) => (
              <div className="modal-movie-item" key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="modal-movie-poster"
                />
                <div className="modal-movie-info">
                  <span>{movie.Title}</span>
                  <span>{movie.Year}</span>
                  <button
                    className="remove-button"
                    onClick={() => {
                      console.log("Removing movie:", movie); // Debug log
                      removeFromPlaylist(movie);
                    }}
                  >
                    <FaTimes /> {/* Close icon */}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="modal-footer">
          <p>My favorite color is DarkCyan</p>
          <button onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CPList;
