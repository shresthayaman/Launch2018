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
      "Without data you are just another guy with opinions.",
      "I want to live in a world where a chicken can cross a road without its motives being questioned.",
      "Typo’s aren’t my biggest problem – Thinko’s are.",
      "Razors pain you, Rivers are damp, Acids stain you, And drugs cause cramp, Guns aren’t lawful, Nooses give, Gas smells awful, You might as well live.",
      "As I was going up the stair, I met a man who wasn’t there. He wasn’t there again today. I wish, I wish he’d stay away.",
      "See the happy moron, He doesn’t give a damn. I wish I were a moron, My God! Perhaps I am!",
      "I have something to say, it’s better to die young, than to fade away. — Highlander",
      "Term, holidays, term, holidays, till we leave school, and then work, work, work till we die. — C.S. Lewis",
      "I used to have a drinking problem. Now I love the stuff."
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
