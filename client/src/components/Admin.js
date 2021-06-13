import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Admin() {
  const password = "childLanguage2020";
  const history = useHistory();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {};

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (input === password) {
        history.push("dashboard");
      } else {
        console.log("Incorrect Password");
      }
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "30vh",
        width: "40vw",
        marginLeft: "30vw",
        height: "auto",
      }}
    >
      <div style={{ marginBottom: "5vh", fontSize: "30px" }}>
        <p>
          ISayLab 관리자 전용 페이지입니다. <br />
          비밀번호를 입력해주세요.
        </p>
      </div>
      <TextField
        style={{ width: "70%" }}
        type="password"
        inputProps={{ style: { fontSize: "40px" } }}
        onChange={handleChange}
        value={input}
        onKeyPress={handleEnter}
      />
      <Button onClick={handleClick}>로그인</Button>
    </div>
  );
}
