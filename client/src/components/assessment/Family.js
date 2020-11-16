import React from "react";

export default function Family(props) {
  const familyHistory = props.familyHistory;
  const familyMember = props.familyMember;

  const spanStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "0px 30px",
  };

  return (
    <div style={{ fontSize: "18px", marginTop: "20px", marginBottom: "50px" }}>
      <p>
        <span>병력이 있는 가족: </span>
        {familyHistory === "Yes" ? { familyMember } : "없음"}
      </p>
    </div>
  );
}
