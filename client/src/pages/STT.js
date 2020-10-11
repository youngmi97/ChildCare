import React, { useContext } from "react";

import { AuthContext } from "../context/auth";

function STT() {
  const { user } = useContext(AuthContext);
  console.log("user info", user);

  return <div>STT Will Take Place Here</div>;
}

export default STT;
