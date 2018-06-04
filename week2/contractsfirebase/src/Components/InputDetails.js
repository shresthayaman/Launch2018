import React from "react";
import firebase from "./firebase.js";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import { orange500, blue500 } from "material-ui/styles/colors";

const style = {
  marginRight: 20
};

const styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};

export default class InputDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: ""
    };
  }

  handleClick() {
    console.log(document.getElementById("name").value);
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("company").value === "" ||
      document.getElementById("details").value === ""
    ) {
      alert(
        "Some field are missing! Please resubmit after filling out all fields."
      );
    } else {
      let contractsRef = firebase.database().ref("contracts");
      let contractInfo = {
        name: document.getElementById("name").value,
        company: document.getElementById("company").value,
        details: document.getElementById("details").value
      };

      contractsRef.push(contractInfo); //this sends a copy of our object so that it can be stored in Firebase.

      this.setState(
        {
          //update state with value in corresponding inputed in input boxes
          name: document.getElementById("name").value,
          company: document.getElementById("company").value,
          details: document.getElementById("details").value
        },
        () => {
          this.props.addContract(this.state); //update the contract List in the state of the main class
        }
      );
    }

    //reset the input boxes
    document.getElementById("name").value = "";
    document.getElementById("company").value = "";
    document.getElementById("details").value = "";
  }

  render() {
    return (
      <div>
        <TextField
          id="name"
          floatingLabelText="Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          id="company"
          floatingLabelText="Company"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          id="details"
          floatingLabelText="Contract Details"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />

        <FloatingActionButton
          style={style}
          onClick={event => this.handleClick()}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
