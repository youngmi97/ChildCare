import React, { useContext, useState, useMemo } from "react";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM, CREATE_PROF_COMMENTS } from "../Mutations";
import Sidebar2 from "../components/Sidebar2";
import TextField from "@material-ui/core/TextField";
import Personal from "../components/assessment/Personal";
import Education from "../components/assessment/Education";
import Development from "../components/assessment/Development";
import Illness from "../components/assessment/Illness";
import Family from "../components/assessment/Family";
import NWRSR from "../components/assessment/NWRSR";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Overall from "../components/assessment/Overall";

const useStyles = makeStyles((theme) => ({
  testCard: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  testMenu: {
    marginTop: "110px",
  },
  root: {
    marginTop: "10vh",
  },
}));

export default function Assessment() {
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

    return childYear + "년" + childMonth + "개월";
  };
  //passed as prop later
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.state.user);

  const { loading, error, data } = useQuery(GET_CHILD_FORM, {
    variables: { userId: location.state.user },
  });

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [broSis, setBroSis] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [impaired, setImpaired] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [education, setEducation] = useState("");
  const [history, setHistory] = useState("");
  const [problem, setProblem] = useState("");
  const [impairment, setImpairment] = useState("");
  const [schoolLanguage, setSchoolLanguage] = useState("");
  const [reason, setReason] = useState("");
  const [improvement, setImprovement] = useState("");
  const [awareness, setAwareness] = useState("");
  const [institute, setInstitute] = useState("");
  const [treatment, setTreatment] = useState("");
  const [teacherFeedback, setTeacherFeedback] = useState("");
  const [teacherFeedback1, setTeacherFeedback1] = useState("");
  const [walkingAge, setWalkingAge] = useState("");
  const [speakingAge, setSpeakingAge] = useState("");
  const [speakingAgeSentence, setSpeakingAgeSentence] = useState("");
  const [developmentProblem, setDevelopmentProblem] = useState("");
  const [developmentProblem1, setDevelopmentProblem1] = useState("");
  const [muscleProblem, setMuscleProblem] = useState("");
  const [muscleProblem1, setMuscleProblem1] = useState("");
  const [illnessAtBirth, setIllnessAtBirth] = useState("");
  const [illnessAtBirth1, setIllnessAtBirth1] = useState("");
  const [illness, setIllness] = useState("");
  const [illness1, setIllness1] = useState("");
  const [surgery, setSurgery] = useState("");
  const [surgery1, setSurgery1] = useState("");
  const [medication, setMedication] = useState("");
  const [medication1, setMedication1] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [familyMember, setFamilyMember] = useState("");

  const [step, setStep] = useState(1);

  const [perFeedback, setPerFeedback] = useState("");
  const [eduFeedback, setEduFeedback] = useState("");
  const [devFeedback, setDevFeedback] = useState("");
  const [illFeedback, setIllFeedback] = useState("");
  const [famFeedback, setFamFeedback] = useState("");
  const [nwrFeedback, setNwrFeedback] = useState("");
  const [ovrFeedback, setOvrFeedback] = useState("");

  const [nwrScore, setNwrScore] = useState(0);
  const [srScore, setSrScore] = useState(0);

  const [nwrState, setNWRState] = useState({
    nwr1: false,
    nwr2: false,
    nwr3: false,
    nwr4: false,
    nwr5: false,
    nwr6: false,
    nwr7: false,
    nwr8: false,
    nwr9: false,
    nwr10: false,
    nwr11: false,
    nwr12: false,
    nwr13: false,
    nwr14: false,
    nwr15: false,
  });

  const [srState, setSRState] = useState({
    sr1: false,
    sr2: false,
    sr3: false,
    sr4: false,
    sr5: false,
    sr6: false,
    sr7: false,
    sr8: false,
    sr9: false,
    sr10: false,
    sr11: false,
    sr12: false,
  });
  console.log(nwrScore, nwrState);
  console.log(srScore, srState);

  useMemo(() => {
    if (!error && !loading) {
      setGender(data.getChildForm.gender);
      setName(data.getChildForm.name);
      setBroSis(data.getChildForm.broSis);
      setDateOfBirth(data.getChildForm.dateOfBirth);
      setImpaired(data.getChildForm.impaired);
      setImpairment(data.getChildForm.impairment);
      setPrimaryLanguage(data.getChildForm.primaryLanguage);
      setSchoolLanguage(data.getChildForm.schoolLanguage);
      setEducation(data.getChildForm.education);
      setHistory(data.getChildForm.history);
      setProblem(data.getChildForm.problem);
      setReason(data.getChildForm.reason);
      setImprovement(data.getChildForm.improvement);
      setAwareness(data.getChildForm.awareness);
      setInstitute(data.getChildForm.institute);
      setTreatment(data.getChildForm.treatment);
      setTeacherFeedback(data.getChildForm.teacherFeedback);
      setTeacherFeedback1(data.getChildForm.teacherFeedback1);
      setWalkingAge(data.getChildForm.walkingAge);
      setSpeakingAge(data.getChildForm.speakingAge);
      setSpeakingAgeSentence(data.getChildForm.speakingAgeSentence);
      setDevelopmentProblem(data.getChildForm.developmentProblem);
      setDevelopmentProblem1(data.getChildForm.developmentProblem1);
      setMuscleProblem(data.getChildForm.muscleProblem);
      setMuscleProblem1(data.getChildForm.muscleProblem1);
      setIllnessAtBirth(data.getChildForm.illnessAtBirth);
      setIllnessAtBirth1(data.getChildForm.illnessAtBirth1);
      setIllness(data.getChildForm.illness);
      setIllness1(data.getChildForm.illness1);
      setSurgery(data.getChildForm.surgery);
      setSurgery1(data.getChildForm.surgery1);
      setMedication(data.getChildForm.medication);
      setMedication1(data.getChildForm.medication1);
      setFamilyHistory(data.getChildForm.familyHistory);
      setFamilyMember(data.getChildForm.familyMember);
    }
  }, [data, error, loading]);

  const onClick = (e) => {
    setStep(step + 1);
  };
  const onClick1 = (e) => {
    setStep(step - 1);
  };
  const onChange = (e) => {
    setPerFeedback(e.target.value);
  };

  const onChange1 = (e) => {
    setEduFeedback(e.target.value);
  };

  const onChange2 = (e) => {
    setDevFeedback(e.target.value);
  };

  const onChange3 = (e) => {
    setIllFeedback(e.target.value);
  };

  const onChange4 = (e) => {
    setFamFeedback(e.target.value);
  };

  const onChange5 = (e) => {
    setNwrFeedback(e.target.value);
  };

  const onChange6 = (e) => {
    setOvrFeedback(e.target.value);
  };

  console.log();

  const [onChildFormSubmit, { data2, loading2, error2 }] =
    useMutation(CREATE_PROF_COMMENTS);

  const onSubmit = () => {
    onChildFormSubmit({
      variables: {
        userId: location.state.user,
        profId: "60caa5744640e222e8f1074e",
        nwrScore: nwrScore,
        srScore: srScore,
        perFeedback: perFeedback,
        eduFeedback: eduFeedback,
        devFeedback: devFeedback,
        illFeedback: illFeedback,
        famFeedback: famFeedback,
        nwrFeedback: nwrFeedback,
        ovrFeedback: ovrFeedback,
      },
    });
  };

  if (loading2) {
    console.log("loading");
  } else {
    console.log(data2);
  }

  switch (step) {
    case 1:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Personal
                      name={name}
                      gender={gender}
                      dateOfBirth={calcAge(dateOfBirth)}
                      broSis={broSis}
                      impaired={impaired}
                      impairment={impairment}
                      primaryLanguage={primaryLanguage}
                      schoolLanguage={schoolLanguage}
                      problem={problem}
                      reason={reason}
                      improvement={improvement}
                      awareness={awareness}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="perFeedback"
                      onChange={onChange}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={perFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
            className={classes.testCard}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Education
                      education={education}
                      institute={institute}
                      history={history}
                      treatment={treatment}
                      teacherFeedback={teacherFeedback}
                      teacherFeedback1={teacherFeedback1}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="eduFeedback"
                      onChange={onChange1}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={eduFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );

    case 3:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Development
                      walkingAge={walkingAge}
                      speakingAge={speakingAge}
                      speakingAgeSentence={speakingAgeSentence}
                      developmentProblem={developmentProblem}
                      developmentProblem1={developmentProblem1}
                      muscleProblem={muscleProblem}
                      muscleProblem1={muscleProblem1}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="devFeedback"
                      onChange={onChange2}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={devFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );
    case 4:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Illness
                      illnessAtBirth={illnessAtBirth}
                      illnessAtBirth1={illnessAtBirth1}
                      illness={illness}
                      illness1={illness1}
                      surgery={surgery}
                      surgery1={surgery1}
                      medication={medication}
                      medication1={medication1}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="illFeedback"
                      onChange={onChange3}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={illFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );

    case 5:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Family
                      familyHistory={familyHistory}
                      familyMember={familyMember}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="famFeedback"
                      onChange={onChange4}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={famFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );

    case 6:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <NWRSR
                      setNwrScore={setNwrScore}
                      setSrScore={setSrScore}
                      setNWRState={setNWRState}
                      setSRState={setSRState}
                      nwrState={nwrState}
                      srState={srState}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="nwrFeedback"
                      onChange={onChange5}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%", marginTop: "40px" }}
                      value={nwrFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );

    case 7:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.root}
        >
          <Grid
            className={classes.testMenu}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} setStep={setStep} />
            </div>
          </Grid>
          <Grid
            className={classes.testCard}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={9}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Card
                style={{ width: "100%", padding: "20px", overflowY: "scroll" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={12}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Overall />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <TextField
                      className={classes.root}
                      id="ovrFeedback"
                      onChange={onChange6}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "70%" }}
                      value={ovrFeedback}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                  >
                    <button style={btnStyle1} onClick={onClick1}>
                      이전 단계로 이동
                    </button>
                    <button style={btnStyle} onClick={onClick}>
                      다음 단계로 이동
                    </button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );

    case 8: {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.root}
        >
          <button style={btnStyle1} onClick={onClick1}>
            이전 단계로 이동
          </button>
          <button
            style={btnStyle}
            onClick={() => {
              onSubmit();
              onClick();
            }}
          >
            제출하기
          </button>
        </Grid>
      );
    }

    default: {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.root}
        >
          <p>평가결과가 제출되었습니다.</p>
        </Grid>
      );
    }
  }
}

const btnStyle = {
  margin: "50px",
  backgroundColor: "#FFEBB8",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  fontWeight: "600",
  outline: "none",
};
const btnStyle1 = {
  margin: "50px",
  backgroundColor: "#E4E4E4",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  fontWeight: "600",
  outline: "none",
};

const SAVE_PROFESSIONAL_COMMENTS = gql`
  mutation createProfComment(
    $userId: String!
    $profId: String!
    $perFeedback: String!
    $eduFeedback: String!
    $devFeedback: String!
    $illFeedback: String!
    $famFeedback: String!
    $nwrFeedback: String!
    $ovrFeedback: String!
  ) {
    createProfComment(
      profComment: {
        userId: $userId
        profId: $profId
        perFeedback: $perFeedback
        eduFeedback: $eduFeedback
        devFeedback: $devFeedback
        illFeedback: $illFeedback
        famFeedback: $famFeedback
        nwrFeedback: $nwrFeedback
        ovrFeedback: $ovrFeedback
      }
    )
  }
`;
