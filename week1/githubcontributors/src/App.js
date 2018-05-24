import React, { Component } from "react";
import "./App.css";
import GitContributorsList from "./Components/GitContributorsList";

//let axios = require("axios");

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitContributorsList />
      </div>
    );
  }
}

export default App;
