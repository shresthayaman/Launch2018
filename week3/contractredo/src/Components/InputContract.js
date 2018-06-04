import React from "react";
import TextField from "@material-ui/core/TextField";
// import PropTypes from "prop-types";
// import FloatingActionButton from "material-ui/FloatingActionButton";
// import ContentAdd from "material-ui/svg-icons/content/add";

const style = {
  marginRight: 20
};

export default class InputContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: ""
    };
  }

  changeState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <TextField
          label="Name"
          name="name"
          margin="normal"
          onChange={this.changeState.bind(this)}
        />
        <TextField
          label="Compnay"
          name="company"
          margin="normal"
          onChange={this.changeState}
        />
        <TextField
          label="Details"
          name="details"
          margin="normal"
          onChange={this.changeState}
        />
        {/* <button onCLick={this.props.contract.addToList(this.state)}>Add</button> */}
        {/* <FloatingActionButton
          style={style}s
          onCLick={this.props.contract.addToList(this.state)}
        >
          <ContentAdd />
        </FloatingActionButton> */}
      </div>
    );
  }
}
