import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Education extends Component {
  show = () => {
    if (this.props.personal.education === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.history === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show2 = () => {
    if (this.props.personal.teacherFeedback === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="container">
        <MuiThemeProvider>
          <React.Fragment>
            <p style={{ display: "inline-block" }}>
              아동이 어린이집/유치원/학교에 다니고 있습니까?
            </p>
            <br />
            <input
              type="radio"
              value="Yes"
              name="education"
              id="education"
              onChange={this.props.onChange}
              checked={this.props.personal.education === "Yes"}
            />{" "}
            네
            <input
              type="radio"
              value="No"
              name="education"
              id="education"
              onChange={this.props.onChange}
              checked={this.props.personal.education === "No"}
            />{" "}
            아니오
            <input
              type="text"
              name="institute"
              id="institute"
              value={this.props.personal.institute}
              onChange={this.props.onChange}
              hidden={this.show()}
              placeholder="기관명"
              style={{
                border: "none",
                borderBottom: "1px solid lightGray",
                outline: "none",
              }}
            />
            <br />
            <br />
            <p style={{ display: "inline-block" }}>
              아동이 언어치료, 놀이치료, 기타 재활치료를 받은 경험이 있습니까?
            </p>
            <br />
            <input
              type="radio"
              value="Yes"
              name="history"
              id="history"
              onChange={this.props.onChange}
              checked={this.props.personal.history === "Yes"}
            />{" "}
            네
            <input
              type="radio"
              value="No"
              name="history"
              id="history"
              onChange={this.props.onChange}
              checked={this.props.personal.history === "No"}
            />{" "}
            아니오
            <input
              type="text"
              name="treatment"
              id="treatment"
              value={this.props.personal.treatment}
              onChange={this.props.onChange}
              hidden={this.show1()}
              placeholder="치료 종류"
              style={{
                border: "none",
                borderBottom: "1px solid lightGray",
                outline: "none",
              }}
            />
            <br />
            <br />
            <p style={{ display: "inline-block" }}>
              교사로부터 아동이 교육기관에서 언어 또는 학업 등과 관련한 문제를
              보이고 있음을 보고받은 경험이 있습니까?
            </p>
            <br />
            <input
              type="radio"
              value="Yes"
              name="teacherFeedback"
              id="teacherFeedback"
              onChange={this.props.onChange}
              checked={this.props.personal.teacherFeedback === "Yes"}
            />{" "}
            네
            <input
              type="radio"
              value="No"
              name="teacherFeedback"
              id="teacherFeedback"
              onChange={this.props.onChange}
              checked={this.props.personal.teacherFeedback === "No"}
            />{" "}
            아니오
            <input
              type="text"
              name="teacherFeedback1"
              id="teacherFeedback1"
              value={this.props.personal.teacherFeedback1}
              onChange={this.props.onChange}
              hidden={this.show2()}
              placeholder="어떤 문제를 보고하였는지"
              style={{
                border: "none",
                borderBottom: "1px solid lightGray",
                outline: "none",
              }}
            />
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

export default Education;
