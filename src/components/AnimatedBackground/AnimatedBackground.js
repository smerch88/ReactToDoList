import React, { Component } from "react";

import "./styles.scss";

export class AnimatedBackground extends Component {
  render() {
    return (
      <>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
