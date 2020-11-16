import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Illness extends Component {
  show = () => {
    if (this.props.personal.illnessAtBirth === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.illness === "Yes") {
      return false;
    } else {
      return true;
    }
  };
  show2 = () => {
    if (this.props.personal.surgery === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show3 = () => {
    if (this.props.personal.medication === "Yes") {
      return false;
    } else {
      return true;
    }
  };
  render() {
    return (
      <div className="container" style={{ fontSize: "18px" }}>
        <MuiThemeProvider>
          <React.Fragment>
            <p style={{ display: "inline-block" }}>
              아동을 출산하는 과정에서 질병이나 사고가 있었습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="illnessAtBirth"
                id="illnessAtBirth"
                onChange={this.props.onChange}
                checked={this.props.personal.illnessAtBirth === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="illnessAtBirth"
                id="illnessAtBirth"
                onChange={this.props.onChange}
                checked={this.props.personal.illnessAtBirth === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="illnessAtBirth1"
                id="illnessAtBirth1"
                value={this.props.personal.illnessAtBirth1}
                onChange={this.props.onChange}
                hidden={this.show()}
                placeholder="무엇인지 적어주세요."
                style={{
                  border: "none",
                  borderBottom: "1px solid lightGray",
                  outline: "none",
                }}
              />
            </div>

            <br />

            <p style={{ display: "inline-block" }}>
              아동에게 특별한 병력이 있었습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="illness"
                id="illness"
                onChange={this.props.onChange}
                checked={this.props.personal.illness === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="illness"
                id="illness"
                onChange={this.props.onChange}
                checked={this.props.personal.illness === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="illness1"
                id="illness1"
                value={this.props.personal.illness1}
                onChange={this.props.onChange}
                hidden={this.show1()}
                placeholder="무엇인지 적어주세요."
                style={{
                  border: "none",
                  borderBottom: "1px solid lightGray",
                  outline: "none",
                }}
              />
            </div>

            <br />

            <p style={{ display: "inline-block" }}>
              아동에게 수술 또는 입원 이력이 있습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="surgery"
                id="surgery"
                onChange={this.props.onChange}
                checked={this.props.personal.surgery === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="surgery"
                id="surgery"
                onChange={this.props.onChange}
                checked={this.props.personal.surgery === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="surgery1"
                id="surgery1"
                value={this.props.personal.surgery1}
                onChange={this.props.onChange}
                hidden={this.show2()}
                placeholder="무엇인지 적어주세요."
                style={{
                  border: "none",
                  borderBottom: "1px solid lightGray",
                  outline: "none",
                }}
              />
            </div>

            <br />

            <p style={{ display: "inline-block" }}>
              아동이 현재 투약중인 약물이 있습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="medication"
                id="medication"
                onChange={this.props.onChange}
                checked={this.props.personal.medication === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="medication"
                id="medication"
                onChange={this.props.onChange}
                checked={this.props.personal.medication === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="medication1"
                id="medication1"
                value={this.props.personal.medication1}
                onChange={this.props.onChange}
                hidden={this.show3()}
                placeholder="무엇인지 적어주세요."
                style={{
                  border: "none",
                  borderBottom: "1px solid lightGray",
                  outline: "none",
                }}
              />
            </div>

            <br />
            <br />

            <button style={btnStyle} onClick={this.props.onBack}>
              Back
            </button>
            <button style={btnStyle} onClick={this.props.onContinue}>
              Continue
            </button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}
const btnStyle = {
  margin: "20px",
  color: "#6C2DC7",
  backgroundColor: "white",
  border: "2px solid",
  borderColor: "#6C2DC7",
  fontSize: "13px",
  padding: "8px 13px",
};
export default Illness;
