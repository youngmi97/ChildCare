import React, { useContext, useState, useMemo } from "react";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM } from "../Mutations";
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

const useStyles = makeStyles((theme) => ({
  testCard: {
    marginTop: "70px",
  },
  testMenu: {
    marginTop: "110px",
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    //"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //borderColor: "red",
    //},
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFB800",
    },
  },
}));

export default function Assessment() {
  //passed as prop later
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_CHILD_FORM, {
    variables: { userId: user.id },
  });

  if (loading) {
    console.log("loading");
  } else {
    console.log("got data", data);
  }

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

  const onClick = () => {
    setStep(step + 1);
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
  console.log(step);

  const onSubmit = () => {};
  switch (step) {
    case 1:
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={12}
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
              <Sidebar2 step={step} />
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
                      dateOfBirth={dateOfBirth}
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
                      autoFocus={true}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "40px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
          alignItems="center"
          xs={12}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
            className={classes.testMenu}
          >
            <div style={{ width: "70%", textAlign: "center" }}>
              <Sidebar2 step={step} />
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
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
          alignItems="center"
          xs={12}
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
              <Sidebar2 step={step} />
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
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
          alignItems="center"
          xs={12}
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
              <Sidebar2 step={step} />
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
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
          alignItems="center"
          xs={12}
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
              <Sidebar2 step={step} />
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
                      onChange={onChange3}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
          alignItems="center"
          xs={12}
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
              <Sidebar2 step={step} />
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
                    <NWRSR />
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
                      onChange={onChange3}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
              <Sidebar2 step={step} />
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
                    Hello
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
                      onChange={onChange3}
                      label="제언사항"
                      multiline
                      rows={4}
                      variant="outlined"
                      style={{ width: "400px" }}
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
                    <button
                      onClick={onClick}
                      style={{
                        margin: "20px",
                        color: "#6C2DC7",
                        backgroundColor: "white",
                        border: "2px solid",
                        borderColor: "#6C2DC7",
                        fontSize: "13px",
                        padding: "8px 13px",
                        outline: "none",
                      }}
                    >
                      Continue
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
        >
          <button style={btnStyle} onClick={(onSubmit, onClick)}>
            제출
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
  outlineColor: "#FFB800",
  fontWeight: "600",
};
