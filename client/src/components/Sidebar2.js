import React, { Component } from "react";

class Sidebar2 extends Component {
  getStyle1 = () => {
    return {
      padding: "10px",
      background: this.props.step === 1 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 1 ? "bold" : "normal",
    };
  };
  getStyle2 = () => {
    return {
      padding: "10px",
      background: this.props.step === 2 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 2 ? "bold" : "normal",
    };
  };

  getStyle3 = () => {
    return {
      padding: "10px",
      background: this.props.step === 3 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 3 ? "bold" : "normal",
    };
  };

  getStyle4 = () => {
    return {
      padding: "10px",
      background: this.props.step === 4 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 4 ? "bold" : "normal",
    };
  };

  getStyle5 = () => {
    return {
      padding: "10px",
      background: this.props.step === 5 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 5 ? "bold" : "normal",
    };
  };

  getStyle6 = () => {
    return {
      padding: "10px",
      background: this.props.step === 6 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 6 ? "bold" : "normal",
    };
  };

  getStyle7 = () => {
    return {
      padding: "10px",
      background: this.props.step === 7 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 7 ? "bold" : "normal",
    };
  };

  render() {
    return (
      <div className="sidebar" style={{ fontSize: "18px" }}>
        <p style={this.getStyle1()}>기본 정보</p>
        <p style={this.getStyle2()}>교육력</p>
        <p style={this.getStyle3()}>발달력</p>
        <p style={this.getStyle4()}>병력</p>
        <p style={this.getStyle5()}>가족력</p>
        <p style={this.getStyle6()}>처리능력</p>
        <p style={this.getStyle7()}>총평</p>
      </div>
    );
  }
}

export default Sidebar2;
