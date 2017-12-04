import React, { Component } from "react";
import "./CodedWithLove.css";

export class CodedWithLove extends Component {
  render() {
    return (
      <div id="codedWithLove">
        <p>
          <div className="code" />
          with
          <div className="heart" />
          at <a href="https://www.asapdevelopers.com">asapdevelopers</a>
        </p>
      </div>
    );
  }
}
