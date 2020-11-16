import React from "react";

export default function Education(props) {
  const education = props.education;
  const institute = props.institute;
  const history = props.history;
  const treatment = props.treatment;
  const teacherFeedback = props.teacherFeedback;
  const teacherFeedback1 = props.teacherFeedback1;

  const spanStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "0px 30px",
  };

  return (
    <div style={{ fontSize: "18px", marginTop: "20px", marginBottom: "50px" }}>
      <div>
        <p>
          <span style={spanStyle}>아동이 다니는 학교: </span>
          {education === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}>아동 치료 경험: </span>
          {history === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}>교사로부터 문제를 보고 받은 경험: </span>
          {teacherFeedback === "Yes" ? "있음" : "없음"}
        </p>
      </div>
    </div>
  );
}
