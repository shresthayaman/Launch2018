import React from "react";

export default class DisplayContracts extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props.showAll)}
        {this.props.showAll.map(contract => {
          return (
            <div>
              <p>Name: {contract.name}</p>
              <p>Company: {contract.company}</p>
              <p>Contract Details: {contract.details}</p>
              <p>
                --------------------------------------------------------------------------
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
