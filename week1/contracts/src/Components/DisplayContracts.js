import React from "react";

export default class DisplayContracts extends React.Component {
  render() {
    return (
      <div>
        {this.props.showAll.map(contract => {
          return (
            <div>
              <p>Name: {contract.name}</p>
              <p>Company: {contract.company}</p>
              <p>Contract Details: {contract.details}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
