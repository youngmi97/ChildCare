import React from "react";

export default function Illness(props) {
  const illnessAtBirth = props.illnessAtBirth;
  const illnessAtBirth1 = props.illnessAtBirth1;
  const illness = props.illness;
  const illness1 = props.illness1;
  const surgery = props.surgery;
  const surgery1 = props.surgery1;
  const medication = props.medication;
  const medication1 = props.medication1;

  const spanStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "0px 30px",
  };

  return (
    <div style={{ fontSize: "18px", marginTop: "20px", marginBottom: "50px" }}>
      <div>
        <p>
          <span style={spanStyle}>출산 과정에서 질병 또는 사고: </span>
          {illnessAtBirth === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}>아동 병력: </span>
          {illness === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}>아동 수술/입원 이력: </span>
          {surgery === "Yes" ? "있음" : "없음"}
        </p>

        <p>
          <span style={spanStyle}> 현재 투약중인 약물 </span>
          {medication === "Yes" ? "있음" : "없음"}
        </p>
      </div>
    </div>
  );
}
