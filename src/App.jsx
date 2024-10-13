import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import MovieSearch from "./components/MovieSearch";
import PlayList from "./components/PlayList";
import ConfirmationScreen from "./components/ConfirmationScreen";
import Header from "./components/Header";
import CPList from "./components/CPList";

function App() {
  const [movies, setMovies] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeFromPlaylist = (movie) => {
    console.log("Playlist before removal:", playlist); // Debug log
    setPlaylist(playlist.filter((m) => m.imdbID !== movie.imdbID)); // Remove from playlist
    console.log("Playlist after removal:", playlist); // Debug log
  };

  const addMovieToPlaylist = (movie) => {
    if (playlist.includes(movie)) {
      removeFromPlaylist(movie); // Remove if already added
    } else {
      setPlaylist([...playlist, movie]); // Add movie
    }
  };

  const confirmPlaylist = () => {
    setIsConfirmed(true);
  };

  const setConfirmPlayList = () => {
    setIsConfirmed(true);
  };

  const openMyList = () => {
    setIsModalOpen(true); // Open the modal for the current playlist
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="App">
        <Header setMovies={setMovies} openMyList={openMyList} />
        <div className="content">
          <>
            <PlayList
              movies={movies}
              addMovieToPlaylist={addMovieToPlaylist}
              playlist={playlist}
            />
          </>
        </div>
        {isModalOpen && (
          <CPList
            movies={playlist}
            onClose={closeModal}
            onConfirm={setConfirmPlayList}
            removeFromPlaylist={removeFromPlaylist}
          />
        )}
      </div>
    </>
  );
}

export default App;
