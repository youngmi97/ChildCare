import React, { Component } from "react";
import ChildForm from "../components/ChildForm";
import NewChildForm from "../components/NewChildForm";

// import { AuthProvider } from "../context/auth";

import { AuthContext } from "../context/auth";

class Form extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    const { user } = this.context;
    console.log(user);
    // { name: 'Tania', loggedIn: true }
    // this.state.userId = user.id;
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
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          padding: "0",
          scrollbarWidth: "none",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: "url(/Main1.jpg)",
            backgroundSize: "100vw 100vh",
            width: "100vw",
            height: "93vh",
            marginTop: "7vh",
          }}
        >
          <div
            style={{
              marginLeft: "7vw",
              paddingTop: "10vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "60vw",
            }}
          >
            <div
              style={{
                fontSize: "2vw",
                fontWeight: "400",
                color: "#e57f16",
                marginBottom: "3vh",
              }}
            >
              online
            </div>
            <div
              style={{
                fontSize: "4vw",
                color: "#717071",
                lineHeight: "8vh",
                fontWeight: "300",
                marginBottom: "4vh",
              }}
            >
              CHILD
              <br />
              LANGUAGE
              <br />
              ASSESSMENT
            </div>
            <div>
              <hr
                style={{
                  width: "3vw",
                  border: "none",
                  borderTop: "0.6vh solid #e57f16",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "1.5vw",
                color: "#717071",
                lineHeight: "4vh",
                fontWeight: "300",
                marginTop: "4vh",
              }}
            >
              아동의 언어발달 수준이 궁금하거나 <br />
              언어 발달 지연이 의심되는 경우,
              <br />
              온라인 언어발달 평가를 통해 가정에서 <br />
              전문가의 언어치료 서비스를 받을 수 있습니다.
              <br />
              아동의 언어 발달 수준, 사용하는 언어 종류에
              <br />
              관계 없이 온라인 평가가 가능합니다.
            </div>
          </div>
        </div>
        <NewChildForm
          form={this.state.info}
          newAnswer={this.newAnswer}
          props={this.state.userId}
          client={this.props.client}
        />
        <div
          style={{ width: "100vw", height: "20vh", backgroundColor: "#F9BE00" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              marginLeft: "15vw",
              paddingTop: "3vh",
              marginBottom: "3vh",
            }}
          >
            <img src="/002.png" width="60px" height="60px" />
            <div
              style={{
                fontSize: "16px",
                color: "white",
                marginBottom: "12px",
                marginLeft: "30px",
                fontWeight: "600",
              }}
            >
              개인정보 처리방침
            </div>
            <div
              style={{
                fontSize: "16px",
                marginBottom: "12px",
                marginLeft: "30px",
                fontWeight: "600",
              }}
            >
              이용 약관
            </div>
            <div
              style={{
                fontSize: "16px",
                marginBottom: "12px",
                marginLeft: "30px",
                fontWeight: "600",
              }}
            >
              윤리 경영
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              marginLeft: "15vw",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "1.2vh",
            }}
          >
            <div>대표전화 010.0000.0000 </div>
            <div style={{ margin: "0px 1vw" }}>|</div>
            <div>대표이메일 sunyim@isay.com </div>
            <div style={{ margin: "0px 1vw" }}>|</div>
            <div>
              서울 서대문구 이화여대길 52 이화여자대학교, 교육관 A동 502호 I SAY
              LAB{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  textAlign: "left",
  padding: "30px",
  fontSize: "30px",
  fontFamily: "Poor Story",
  fontWeight: "bold",
  color: "#6C2DC7",
};
export default Form;
