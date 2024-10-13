import React from "react";

const ConfirmationScreen = ({ playlist }) => {
  const favouriteColor = "blue";
  return (
    <div>
      <h3>Confirmed Playlist:</h3>
      <ul>
        {playlist.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
      <footer style={{ backgroundColor: favouriteColor, padding: "10px" }}>
        My favourite Colour is {favouriteColor}
      </footer>
    </div>
  );
};

export default ConfirmationScreen;
