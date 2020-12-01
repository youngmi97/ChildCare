import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_CHILD_FORM } from "../Mutations";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { AuthContext } from "../context/auth";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "110px",
    marginRight: "110px",
    marginBottom: "30px",
    fontSize: "13px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
  qna: {
    padding: "15px 0px",
  },
  question: {
    margin: "20px 90px",
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
}));
function ChildFormSubmit(props) {
  const { user } = useContext(AuthContext);
  //const [errors, setErrors] = useState({});
  const classes = useStyles();

  const calcAge = (date) => {
    var year;
    var month;

    if (date.length < 8) {
      return;
    } else {
      year = date.substring(0, 4);
      month = date.substring(4, 6);
      var today = new Date();
      var mm = String(today.getMonth() + 1); //January is 0!
      var yyyy = today.getFullYear();
      var childYear = yyyy - year;
      var childMonth = mm - month;
      if (childMonth < 0) {
        childMonth = 12 + childMonth;
        childYear = childYear - 1;
      }
    }
  };

  const [onChildFormSubmit, { data, loading, error }] = useMutation(
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
  };

  return (
    <Grid container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        className={classes.title}
      >
        <p>제출하시겠습니까?</p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        className={classes.subtitle}
      >
        <p>
          설문조사가 끝났습니다. 평가 결과는 제출 후 2주 이내로 나올 예정입니다.
        </p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <button style={btnStyle1} onClick={props.onBack}>
          이전 단계로 이동
        </button>
        <button style={btnStyle} onClick={myFunction}>
          제출하기
        </button>
      </Grid>
    </Grid>
  );
}

const btnStyle = {
  margin: "50px",
  backgroundColor: "#FFEBB8",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#FFB800",
  fontWeight: "600",
};

const btnStyle1 = {
  margin: "50px",
  backgroundColor: "#E4E4E4",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#626567",
  fontWeight: "600",
};

export default ChildFormSubmit;
