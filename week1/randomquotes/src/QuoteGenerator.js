import React, { Component } from "react";

export default class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { quoteIndex: 0 };
  }

  handleClick() {
    console.log("handleClick is being run: " + this.state.quoteIndex);
    if (this.state.quoteIndex === this.props.variousQuotes.length - 1) {
      this.setState({ quoteIndex: 0 });
    } else {
      this.setState({ quoteIndex: this.state.quoteIndex + 1 });
    }
  }

  render() {
    return (
      <div>
        <p>
          <u>Juicy Quote</u>
        </p>
        <p>{this.props.variousQuotes[this.state.quoteIndex]}</p>
        <button onClick={event => this.handleClick()}>
          {"Give me a juicy quote!"}
        </button>
      </div>
    );
  }
}
