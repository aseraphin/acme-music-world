import React from "react";

const Navbar = (props) => {
  const { artists, albums, view } = props;
  return (
    <div className="nav">
      <a href="/" id={!view ? "selected" : ""}>
        Home
      </a>
      <a href="#artists" id={view === "artists" ? "selected" : ""}>
        Artists ({artists.length})
      </a>
      <a href="#albums" id={view === "albums" ? "selected" : ""}>
        Albums ({albums.length})
      </a>
    </div>
  );
};

export default Navbar;
