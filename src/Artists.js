import React from "react";

const Artists = (props) => {
  const { artists } = props;
  return (
    <div>
      {artists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </div>
  );
};

export default Artists;
