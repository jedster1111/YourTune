import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactPlayer
            url="http://yourtune.jedthompson.co.uk/live/jedster1111/index.m3u8"
            playing={true}
            controls={true}
            width={1280}
            height={720}
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
