import React from "react";

const Albums = (props) => {
  const { albums } = props;

  return (
    <div>
      {albums.map((album) => (
        <li key={album.id}>
          {album.name} ({album.artist.name})
        </li>
      ))}
    </div>
  );
};

export default Albums;
