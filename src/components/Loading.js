import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Loading extends Component {
  render() {
    return (
      <div className="progressbar">
        <ProgressBar striped bsStyle="info" active now={1} id="bar" />
      </div>
    );
  }
}

export default Loading;
