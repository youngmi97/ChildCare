import React from "react";
import { Grid } from "@material-ui/core";

export default function Personal(props) {
  const name = props.name;
  const gender = props.gender;
  const dateOfBirth = props.dateOfBirth;
  const broSis = props.broSis;
  const impaired = props.impaired;
  const impairment = props.impairment;
  const primaryLanguage = props.primaryLanguage;
  const schoolLanguage = props.schoolLanguage;
  const problem = props.problem;
  const reason = props.reason;
  const improvement = props.improvement;
  const awareness = props.awareness;

  const spanStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "0px 30px",
  };

  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', sans serif;",
        fontSize: "18px",
        marginTop: "20px",
        marginBottom: "50px",
      }}
    >
      <div>
        <p>
          <span style={spanStyle}>아동 이름 : </span>
          {name}
        </p>
        <p>
          <span style={spanStyle}>아동 성별:</span> {gender}
        </p>
        <p>
          <span style={spanStyle}>아동 나이:</span> {dateOfBirth}
        </p>
        <p>
          <span style={spanStyle}>자매:</span>{" "}
          {broSis === "Yes" ? "있음" : "없음"}
        </p>
        <p>
          <span style={spanStyle}>장애 여부: </span>
          {impaired === "Yes" ? { impairment } : "없음"}
        </p>
        <p>
          <span style={spanStyle}>집에서 사용하는 언어:</span> {primaryLanguage}
        </p>
        <p>
          <span style={spanStyle}>학교에서 사용하는 언어:</span>{" "}
          {schoolLanguage}
        </p>
        <p>
          <span style={spanStyle}>아동의 언어 문제:</span> {problem}
        </p>
        <p>
          <span style={spanStyle}>문제 원인: </span>
          {reason}
        </p>
        <p>
          <span style={spanStyle}>개선 여부:</span>
          {improvement === "getting better"
            ? "개선되고 있다"
            : improvement === "getting worse"
            ? "악화되고 있다"
            : "변화가 없다"}
        </p>
        <p>
          <span style={spanStyle}>아동이 자신의 언어문제를 인지하는지:</span>

          {awareness}
        </p>
      </div>
    </div>
  );
}
