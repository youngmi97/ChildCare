import React, { useContext } from "react";
import ChildForm from "../components/ChildForm";

import { AuthContext } from "../context/auth";

function Form() {
  //const { user } = useContext(AuthContext);

  return <ChildForm />;
}

export default Form;
