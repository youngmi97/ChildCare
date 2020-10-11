import React, { Component } from "react";

class SpeechToText extends Component {
  onStart = (e) => {};

  render() {
    return <button onClick={this.onStart}>Conduct STT</button>;
  }
}

export default SpeechToText;
