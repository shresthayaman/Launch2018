import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteGenerator from "./QuoteGenerator.js";

class App extends Component {
  render() {
    let quotes = [
      "If you have nothing, are you a nillionaire?",
      "If I eat myself, will I get twice as big, or disappear completely?",
      "Don’t go through life. GROW through life.",
      "Turning up the volume is like zooming in, but with sound.",
      "Without data you are just another guy with opinions."
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <QuoteGenerator variousQuotes={quotes} />
      </div>
    );
  }
}

export default App;
