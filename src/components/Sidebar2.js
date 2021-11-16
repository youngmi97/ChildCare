import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Sidebar2 extends Component {
  getStyle1 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 1 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 1 ? "bold" : "normal",
    };
  };
  getStyle2 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 2 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 2 ? "bold" : "normal",
    };
  };

  getStyle3 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 3 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 3 ? "bold" : "normal",
    };
  };

  getStyle4 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 4 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 4 ? "bold" : "normal",
    };
  };

  getStyle5 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 5 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 5 ? "bold" : "normal",
    };
  };

  getStyle6 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 6 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 6 ? "bold" : "normal",
    };
  };

  getStyle7 = () => {
    return {
      fontSize: "18px",
      padding: "10px",
      background: this.props.step === 7 ? "#FFEBB8" : "none",
      fontWeight: this.props.step === 7 ? "bold" : "normal",
    };
  };

  render() {
    return (
      <div
        className="sidebar"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Button style={this.getStyle1()} onClick={() => this.props.setStep(1)}>
          기본 정보
        </Button>
        <Button style={this.getStyle2()} onClick={() => this.props.setStep(2)}>
          교육력
        </Button>
        <Button style={this.getStyle3()} onClick={() => this.props.setStep(3)}>
          발달력
        </Button>
        <Button style={this.getStyle4()} onClick={() => this.props.setStep(4)}>
          병력
        </Button>
        <Button style={this.getStyle5()} onClick={() => this.props.setStep(5)}>
          가족력
        </Button>
        <Button style={this.getStyle6()} onClick={() => this.props.setStep(6)}>
          처리능력
        </Button>
        <Button style={this.getStyle7()} onClick={() => this.props.setStep(7)}>
          총평
        </Button>
      </div>
    );
  }
}

export default Sidebar2;
