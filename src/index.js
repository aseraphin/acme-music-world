import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Home from "./Home";
import Artists from "./Artists";
import Albums from "./Albums";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      view: undefined,
    };
  }

  async componentDidMount() {
    this.setState({
      albums: (await axios.get("/api/albums")).data,
      artists: (await axios.get("api/artists")).data,
    });
    window.addEventListener("hashchange", () => {
      this.setState({ view: window.location.hash.slice(1) });
    });
  }

  render() {
    const { artists, albums, view } = this.state;
    return (
      <main>
        <Navbar artists={artists} albums={albums} view={view} />
        <div className="content">
          {!view ? (
            <Home />
          ) : view === "artists" ? (
            <Artists artists={artists} />
          ) : (
            <Albums albums={albums} />
          )}
        </div>
      </main>
    );
  }
}

render(<App />, document.querySelector("#root"));
