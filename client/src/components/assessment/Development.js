import React from "react";

export default function Development(props) {
  const walkingAge = props.walkingAge;
  const speakingAge = props.speakingAge;
  const speakingAgeSentence = props.speakingAgeSentence;
  const developmentProblem = props.developmentProblem;
  const developmentProblem1 = props.developmentProblem1;
  const muscleProblem = props.muscleProblem;
  const muscleProblem1 = props.muscleProblem1;

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
          <span style={spanStyle}>걷기: </span>
          {walkingAge === "Slow"
            ? "느렸다"
            : walkingAge === "Average"
            ? "평균이였다"
            : "빨랐다"}
        </p>

        <p>
          <span style={spanStyle}>단어 사용: </span>
          {speakingAge === "Slow"
            ? "느렸다"
            : speakingAge === "Average"
            ? "평균이였다"
            : "빨랐다"}
        </p>

        <p>
          <span style={spanStyle}>문장 사용: </span>
          {speakingAgeSentence === "Slow"
            ? "느렸다"
            : speakingAgeSentence === "Average"
            ? "평균이였다"
            : "빨랐다"}
        </p>

        <p>
          <span style={spanStyle}>식이/수면/배변 문제: </span>
          {developmentProblem === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}>대근육/소근육/구강 운동 문제: </span>
          {muscleProblem === "Yes" ? "있음" : "없음"}
        </p>
      </div>
    </div>
  );
}
