import React, { Component } from "react";
import "./App.css";
import InputDetails from "./Components/InputDetails";
import DisplayContracts from "./Components/DisplayContracts";
import firebase from "./Components/firebase";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractList: []
    };
  }

  componentDidMount() {
    let contractsRef = firebase.database().ref("contracts");

    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let newState = [];
      for (let contract in contracts) {
        newState.push({
          name: contracts[contract].name,
          company: contracts[contract].company,
          details: contracts[contract].details
        });
      }
      this.setState({
        contractList: newState
      });
    });
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
        {console.log(this.state.contractList)}
        <DisplayContracts showAll={this.state.contractList} />
      </div>
    );
  }
}

export default App;
