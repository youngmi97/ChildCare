import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_CHILD_FORM } from "../Mutations";

import { AuthContext } from "../context/auth";

function ChildFormSubmit(props) {
  const { user } = useContext(AuthContext);
  //const [errors, setErrors] = useState({});

  console.log("prop gender", props.input.gender);
  console.log("prop institute", props.input.institute);
  console.log("prop familyMember", props.input.familyMember);

  const [onChildFormSubmit, { data, loading, error }] = 
  useMutation(
    SUBMIT_CHILD_FORM
  );


  const myFunction = (e) => {
        onChildFormSubmit({
          variables: {
            userId: user.id,
            gender: props.input.gender || "",
            name: props.input.name || "",
            email: props.input.email || "",
            dateOfBirth: props.input.dateOfBirth || "",
            primaryLanguage: props.input.primaryLanguage || "",
            education: props.input.education || "",
            history: props.input.history || "",
            problem: props.input.problem || "",
            broSis: props.input.broSis || "",
            impaired: props.input.impaired || "",
            impairment: props.input.impairment || "",
            schoolLanguage: props.input.schoolLanguage || "",
            reason: props.input.reason || "",
            improvement: props.input.improvement || "",
            awareness: props.input.awareness || "",
            institute: props.input.institute || "",
            treatment: props.input.treatment || "",
            teacherFeedback: props.input.teacherFeedback || "",
            teacherFeedback1: props.input.teacherFeedback1 || "",
            walkingAge: props.input.walkingAge || "",
            speakingAge: props.input.speakingAge || "",
            speakingAgeSentence: props.input.speakingAgeSentence || "",
            developmentProblem: props.input.developmentProblem || "",
            developmentProblem1: props.input.developmentProblem1 || "",
            muscleProblem: props.input.muscleProblem || "",
            muscleProblem1: props.input.muscleProblem1 || "",
            illnessAtBirth: props.input.illnessAtBirth || "",
            illnessAtBirth1: props.input.illnessAtBirth1 || "",
            illness: props.input.illness || "",
            illness1: props.input.illness1 || "",
            surgery: props.input.surgery || "",
            surgery1: props.input.surgery1 || "",
            medication: props.input.medication || "",
            medication1: props.input.medication1 || "",
            familyHistory: props.input.familyHistory || "",
            familyMember: props.input.familyMember || "",
          },
        });

        props.onContinue(e);
  }


  return (
    <button
      style={btnStyle}
      onClick={
        myFunction
      }
    >
      Submit
    </button>
  );
}

const btnStyle = {
  margin: "20px",
  color: "#6C2DC7",
  backgroundColor: "white",
  border: "2px solid",
  borderColor: "#6C2DC7",
  fontSize: "13px",
  padding: "8px 13px",
};

export default ChildFormSubmit;
