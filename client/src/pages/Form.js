import React, { Component } from "react";
import ChildForm from "../components/ChildForm";
// import { AuthProvider } from "../context/auth";

import { AuthContext } from "../context/auth";



class Form extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    const { user } = this.context;
    console.log(user); // { name: 'Tania', loggedIn: true }
    //this.state.userId = user.id;
  }

  state = {
    userId: "",
    info: [
      {
        gender: "",
        name: "",
        dateOfBirth: "",
        primaryLanguage: "",
        education: "",
        history: "",
        problem: "",
        broSis: "",
        institute: "",
        impaired: "",
        impairment: "",
        schoolLanguage: "",
        reason: "",
        improvement: "",
        awareness: "",
        treatement: "",
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
      },
    ],
  };
  newAnswer = (
    gender,
    name,
    dateOfBirth,
    primaryLanguage,
    education,
    history,
    problem,
    broSis,
    impaired,
    impairment,
    schoolLanguage,
    reason,
    improvement,
    awareness,
    institute,
    treatment,
    teacherFeedback,
    teacherFeedback1,
    walkingAge,
    speakingAge,
    speakingAgeSentence,
    developmentProblem,
    developmentProblem1,
    muscleProblem,
    muscleProblem1,
    illnessAtBirth,
    illnessAtBirth1,
    illness,
    illness1,
    surgery,
    surgery1,
    medication,
    medication1,
    familyHistory,
    familyMember
  ) => {
    this.setState({
      info: [
        {
          gender: gender,
          name: name,
          dateOfBirth: dateOfBirth,
          primaryLanguage: primaryLanguage,
          education: education,
          history: history,
          problem: problem,
          broSis: broSis,
          impaired: impaired,
          impairment: impairment,
          schoolLanguage: schoolLanguage,
          reason: reason,
          improvement: improvement,
          awareness: awareness,
          institute: institute,
          treatment: treatment,
          teacherFeedback: teacherFeedback,
          teacherFeedback1: teacherFeedback1,
          walkingAge: walkingAge,
          speakingAge: speakingAge,
          speakingAgeSentence: speakingAgeSentence,
          developmentProblem: developmentProblem,
          developmentProblem1: developmentProblem1,
          muscleProblem: muscleProblem,
          muscleProblem1: muscleProblem1,
          illnessAtBirth: illnessAtBirth,
          illnessAtBirth1: illnessAtBirth1,
          illness: illness,
          illness1: illness1,
          surgery: surgery,
          surgery1: surgery1,
          medication: medication,
          medication1: medication1,
          familyHistory: familyHistory,
          familyMember: familyMember,
        },
      ],
    });
  };

  render() {
    //console.log("userId", this.state.userId);
    return (
      <div className="Form">
        <header style={headerStyle}>아동언어연구소</header>
        <div>
          <ChildForm
            form={this.state.info}
            newAnswer={this.newAnswer}
            props={this.state.userId}
            client={this.props.client}
          />
        </div>
      </div>
    );
  }
}

const headerStyle = {
  textAlign: "left",
  padding: "30px",
  fontSize: "30px",
};
export default Form;
