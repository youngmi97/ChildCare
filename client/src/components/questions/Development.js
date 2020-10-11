import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Development extends Component {
  show = () => {
    if (this.props.personal.developmentProblem === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.muscleProblem === "Yes") {
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
              아동의 발달력 정보를 기입해주세요.
            </p>
            <br />

            <div>
              <p style={{ display: "inline-block" }}>
                걷기 (평균 남아 여아 아동 12개월):{" "}
              </p>{" "}
              <input
                type="radio"
                value="Slow"
                name="walkingAge"
                id="walkingAge"
                onChange={this.props.onChange}
                checked={this.props.personal.walkingAge === "Slow"}
              />{" "}
              느렸다{" "}
              <input
                type="radio"
                value="Average"
                name="walkingAge"
                id="walkingAge"
                onChange={this.props.onChange}
                checked={this.props.personal.walkingAge === "Average"}
              />{" "}
              평균이였다
              <br />
              <p style={{ display: "inline-block" }}>
                언제 단어를 사용하기 시작했나요? (평균 남아 여아 아동
                10-12개월):{" "}
              </p>{" "}
              <input
                type="radio"
                value="Slow"
                name="speakingAge"
                id="speakingAge"
                onChange={this.props.onChange}
                checked={this.props.personal.speakingAge === "Slow"}
              />{" "}
              느렸다{" "}
              <input
                type="radio"
                value="Average"
                name="speakingAge"
                id="speakingAge"
                onChange={this.props.onChange}
                checked={this.props.personal.speakingAge === "Average"}
              />{" "}
              평균이였다
              <br />
              <p style={{ display: "inline-block" }}>
                간단한 문장 사용을 언제 시작했나요? (평균 남아 여아 아동
                19-24개월):{" "}
              </p>{" "}
              <input
                type="radio"
                value="Slow"
                name="speakingAgeSentence"
                id="speakingAgeSentence"
                onChange={this.props.onChange}
                checked={this.props.personal.speakingAgeSentence === "Slow"}
              />{" "}
              느렸다{" "}
              <input
                type="radio"
                value="Average"
                name="speakingAgeSentence"
                id="speakingAgeSentence"
                onChange={this.props.onChange}
                checked={this.props.personal.speakingAgeSentence === "Average"}
              />{" "}
              평균이였다
              <br />
            </div>

            <p style={{ display: "inline-block" }}>
              아동이 식이/수면/배면 문제를 갖고 있습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="developmentProblem"
                id="developmentProblem"
                onChange={this.props.onChange}
                checked={this.props.personal.developmentProblem === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="developmentProblem"
                id="developmentProblem"
                onChange={this.props.onChange}
                checked={this.props.personal.developmentProblem === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="developmentProblem1"
                id="developmentProblem1"
                value={this.props.personal.developmentProblem1}
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
              아동이 현재 대근육 운동, 소근육 운동, 구강 운동 문제를 갖고
              있습니까?
            </p>
            <br />
            <div>
              <input
                type="radio"
                value="Yes"
                name="muscleProblem"
                id="muscleProblem"
                onChange={this.props.onChange}
                checked={this.props.personal.muscleProblem === "Yes"}
              />{" "}
              네
              <input
                type="radio"
                value="No"
                name="muscleProblem"
                id="muscleProblem"
                onChange={this.props.onChange}
                checked={this.props.personal.muscleProblem === "No"}
              />{" "}
              아니오
              <input
                type="text"
                name="muscleProblem1"
                id="muscleProblem1"
                value={this.props.personal.muscleProblem1}
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

export default Development;
