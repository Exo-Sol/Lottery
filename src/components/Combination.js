import React, { Component, Fragment } from "react";
import "../App.css";

class Combination extends Component {
  static defaultProps = {
    renderComb: "Dobitna Kombinacija",
  };

  render() {
    return (
      <Fragment>
        <p id="comb"> {this.props.renderComb}</p>
      </Fragment>
    );
  }
}

export default Combination;
