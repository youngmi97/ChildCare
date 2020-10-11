import React, { Component } from "react";

class Sidebar extends Component {
  getStyle1 = () => {
    return {
      padding: "10px",
      background: this.props.step === 1 ? "#E3E4FA" : "none",
    };
  };
  getStyle2 = () => {
    return {
      padding: "10px",
      background: this.props.step === 2 ? "#E3E4FA" : "none",
    };
  };

  getStyle3 = () => {
    return {
      padding: "10px",
      background: this.props.step === 3 ? "#E3E4FA" : "none",
    };
  };

  getStyle4 = () => {
    return {
      padding: "10px",
      background: this.props.step === 4 ? "#E3E4FA" : "none",
    };
  };

  getStyle5 = () => {
    return {
      padding: "10px",
      background: this.props.step === 5 ? "#E3E4FA" : "none",
    };
  };

  getStyle6 = () => {
    return {
      padding: "10px",
      background: this.props.step === 6 ? "#E3E4FA" : "none",
    };
  };

  getStyle7 = () => {
    return {
      padding: "10px",
      background: this.props.step === 7 ? "#E3E4FA" : "none",
    };
  };
  render() {
    return (
      <div className="sidebar">
        <p style={this.getStyle1()}>기본 정보</p>
        <p style={this.getStyle2()}>교육력</p>
        <p style={this.getStyle3()}>발달력</p>
        <p style={this.getStyle4()}>병력</p>
        <p style={this.getStyle5()}>가족력</p>
        <p style={this.getStyle6()}>비디오 업로드</p>
        <p style={this.getStyle7()}>제출</p>
      </div>
    );
  }
}

export default Sidebar;
