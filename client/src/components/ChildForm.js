import React, { Component } from "react";
import PropTypes from "prop-types";
import Personal from "./questions/Personal";
import Education from "./questions/Education";
import Development from "./questions/Development";
import Illness from "./questions/Illness";
import Family from "./questions/Family";
import Sidebar from "./SideBar";
import Video from "./questions/Video";
import NWR from "./questions/NWR";
import SR from "./questions/SR"

class ChildForm extends Component {
  state = {
    step: 0,
    gender: "",
    name: "",
    dateOfBirth: "",
    primaryLanguage: "",
    education: "",
    history: "",
    problem: "",
    broSis: "",
    impaired: "",
    impairment: "",
    institute: "",
    treatment: "",
    teacherFeedback: "",
    teacherFeedback1: "",
    walkingAge: "",
    speakingAge: "",
    speakingAgeSentence: "",
    developmentProblem: "",
    developmentProblem1: "",
    muscleProblem: "",
    muscleProblem1: "",
    illnessAtBirth: "",
    illnessAtBirth1: "",
    illness: "",
    illness1: "",
    surgery: "",
    surgery1: "",
    medication: "",
    medication1: "",
    familyHistory: "",
    familyMember: "",

  };

  onStart = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });

  onContinue = (e) => {
    e.preventDefault();
    this.props.newAnswer(
      this.state.gender,
      this.state.name,
      this.state.dateOfBirth,
      this.state.primaryLanguage,
      this.state.education,
      this.state.history,
      this.state.problem,
      this.state.broSis,
      this.state.impaired,
      this.state.impairment,
      this.state.schoolLanguage,
      this.state.reason,
      this.state.improvement,
      this.state.awareness,
      this.state.institute,
      this.state.treatment,
      this.state.teacherFeedback,
      this.state.teacherFeedback1,
      this.state.walkingAge,
      this.state.speakingAge,
      this.state.speakingAgeSentence,
      this.state.developmentProblem,
      this.state.developmentProblem1,
      this.state.muscleProblem,
      this.state.muscleProblem1,
      this.state.illnessAtBirth,
      this.state.illnessAtBirth1,
      this.state.illness,
      this.state.illness1,
      this.state.surgery,
      this.state.surgery1,
      this.state.medication,
      this.state.medication1,
      this.state.familyHistory,
      this.state.familyMember,
    );

    this.nextStep();
  };
  onBack = (e) => {
    e.preventDefault();
    this.props.newAnswer(
      this.state.gender,
      this.state.name,
      this.state.dateOfBirth,
      this.state.primaryLanguage,
      this.state.education,
      this.state.history,
      this.state.problem,
      this.state.broSis,
      this.state.impaired,
      this.state.impairment,
      this.state.schoolLanguage,
      this.state.reason,
      this.state.improvement,
      this.state.awareness,
      this.state.institute,
      this.treatment,
      this.teacherFeedback,
      this.teacherFeedback1,
      this.state.walkingAge,
      this.state.speakingAge,
      this.state.speakingAgeSentence,
      this.state.developmentProblem,
      this.state.developmentProblem1,
      this.state.muscleProblem,
      this.state.muscleProblem1,
      this.state.illnessAtBirth,
      this.state.illnessAtBirth1,
      this.state.illness,
      this.state.illness1,
      this.state.surgery,
      this.state.surgery1,
      this.state.medication,
      this.state.medication1,
      this.state.familyHistory,
      this.state.familyMember,
    );

    this.prevStep();
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 0:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "6", padding: "40px" }}>
              <button onClick={this.onStart} style={startButton}>
                Start
              </button>
            </div>
            <div style={{ flex: "6" }}></div>
          </div>
        );

      case 1:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "2"}}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: "8", margin:"0 160px"}}>
              <Personal
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "2" }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: "8", margin:"30px 160px"}}>
              <Education
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8 , margin:"30px 160px"}}>
              <Development
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8 , margin:"30px 160px"}}>
              <Illness
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <Family
                personal={this.state}
                onChange = {this.onChange}
                onContinue={this.onContinue}
                onChange={this.onChange}
                onBack={this.onBack}
              />
            </div>
          </div>
        );

      case 6:
        return(
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8 , margin:"30px 160px"}}>
              <Video
                onChange = {this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
            
          </div>
          
        )

      case 7:
        return(
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8 , margin:"30px 160px"}}>
              <NWR
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
            
          </div>
          
        )

      case 8:
          return(
            <div className="container" style={myStyle}>
              <div style={{ flex: 2 }}>
                <Sidebar step={this.state.step} />
              </div>
              <div style={{ flex: 8 , margin:"30px 160px"}}>
                <SR
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </div>
              
            </div>
            
          )
      case 9:
        return (
          
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: "8", margin: "30px 160px" }}>
              <p >제출하시겠습니까?</p>
              <button onClick={this.onStart} style={startButton}>
                Submit
              </button>
            </div>
          </div>
        );
        

      default:
        return (
          <div>
            <p style={{ padding: "50px" }}>
              제출되었습니다. 평가 결과를 기다려주세요.
            </p>
          </div>
        );
    }
  }
}

const myStyle = {
  margin: "70px",
  display: "flex",
  flexDirection: "row",
};

const startButton = {
  color: "white",
  backgroundColor: "#6C2DC7",
  border: "none",
  fontSize: "16px",
  padding: "15px 30px",
};
ChildForm.propTypes = {
  form: PropTypes.array.isRequired,
};
export default ChildForm;
