import React, { Component } from "react";
import ReactPlayer from "react-player";

export class VidAnnotator extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer url="https://www.youtube.com/watch?v=ReoSr-MLrBg" />
      </div>
    );
  }
}

export default VidAnnotator;
