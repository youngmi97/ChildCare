import React, { useContext } from "react";
import SpeechToText from "../components/SpeechToText";
import { AuthContext } from "../context/auth";

function STT() {
  const { user } = useContext(AuthContext);
  console.log("user info", user);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <SpeechToText />
    </div>
  );
}

export default STT;
