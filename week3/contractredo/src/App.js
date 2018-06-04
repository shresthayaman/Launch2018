import React, { Component } from "react";
import "./App.css";
import InputContract from "./Components/InputContract";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractList: []
    };
  }

  addContract(contract) {
    this.state.contractList.push(contract);
  }

  render() {
    return (
      <div className="App">
        <InputContract contract={this.addContract} />
      </div>
    );
  }
}

export default App;
