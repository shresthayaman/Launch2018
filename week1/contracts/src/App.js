import React, { Component } from "react";
import "./App.css";
import InputDetails from "./Components/InputDetails";
import DisplayContracts from "./Components/DisplayContracts";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractList: []
    };
  }

  updateContracts(newContract) {
    let temp = this.state.contractList;
    temp.push(newContract);
    this.setState({
      contractList: temp
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <InputDetails
            addContract={contract => this.updateContracts(contract)}
          />
        </MuiThemeProvider>
        <DisplayContracts showAll={this.state.contractList} />
      </div>
    );
  }
}

export default App;
