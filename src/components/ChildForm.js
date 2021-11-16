import React, { Component } from "react";
import PropTypes from "prop-types";
import Personal from "./questions/Personal";
import Education from "./questions/Education";
import Development from "./questions/Development";
import Illness from "./questions/Illness";
import Family from "./questions/Family";
import Sidebar from "./SideBar";
import Video from "./questions/Video";
import NWR from "./questions/NWR";
import SR from "./questions/SR";
import ChildFormSubmit from "./ChildFormSubmit";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

// HOW TO GET CLIENT TO CLASS COMPONENT??
// withApollo?

// import { AuthContext } from "../context/auth";
// import { Mutation } from "react-apollo";

// import { SUBMIT_CHILD_FORM } from "../Mutations";

const styles = (theme) => ({
  root: {
    height: "500px",
    textAlign: "center",
    justifyContent: "center",
  },
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
});

class ChildForm extends Component {
  //static contextType = AuthContext;

  state = {
    step: 0,
    gender: "",
    name: "",
    dateOfBirth: "",
    primaryLanguage: "",
    education: "",
    history: "",
    problem: "",
    broSis: "",
    impaired: "",
    impairment: "",
    institute: "",
    treatment: "",
    teacherFeedback: "",
    teacherFeedback1: "",
    walkingAge: "",
    speakingAge: "",
    speakingAgeSentence: "",
    developmentProblem: "",
    developmentProblem1: "",
    muscleProblem: "",
    muscleProblem1: "",
    illnessAtBirth: "",
    illnessAtBirth1: "",
    illness: "",
    illness1: "",
    surgery: "",
    surgery1: "",
    medication: "",
    medication1: "",
    familyHistory: "",
    familyMember: "",
  };

  onStart = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.nextStep();
    // Mutation To DB should happen here
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });

  onContinue = (e) => {
    e.preventDefault();
    this.props.newAnswer(
      this.state.gender,
      this.state.name,
      this.state.dateOfBirth,
      this.state.primaryLanguage,
      this.state.education,
      this.state.history,
      this.state.problem,
      this.state.broSis,
      this.state.impaired,
      this.state.impairment,
      this.state.schoolLanguage,
      this.state.reason,
      this.state.improvement,
      this.state.awareness,
      this.state.institute,
      this.state.treatment,
      this.state.teacherFeedback,
      this.state.teacherFeedback1,
      this.state.walkingAge,
      this.state.speakingAge,
      this.state.speakingAgeSentence,
      this.state.developmentProblem,
      this.state.developmentProblem1,
      this.state.muscleProblem,
      this.state.muscleProblem1,
      this.state.illnessAtBirth,
      this.state.illnessAtBirth1,
      this.state.illness,
      this.state.illness1,
      this.state.surgery,
      this.state.surgery1,
      this.state.medication,
      this.state.medication1,
      this.state.familyHistory,
      this.state.familyMember
    );

    this.nextStep();
  };
  onBack = (e) => {
    e.preventDefault();
    this.props.newAnswer(
      this.state.gender,
      this.state.name,
      this.state.dateOfBirth,
      this.state.primaryLanguage,
      this.state.education,
      this.state.history,
      this.state.problem,
      this.state.broSis,
      this.state.impaired,
      this.state.impairment,
      this.state.schoolLanguage,
      this.state.reason,
      this.state.improvement,
      this.state.awareness,
      this.state.institute,
      this.state.treatment,
      this.state.teacherFeedback,
      this.state.teacherFeedback1,
      this.state.walkingAge,
      this.state.speakingAge,
      this.state.speakingAgeSentence,
      this.state.developmentProblem,
      this.state.developmentProblem1,
      this.state.muscleProblem,
      this.state.muscleProblem1,
      this.state.illnessAtBirth,
      this.state.illnessAtBirth1,
      this.state.illness,
      this.state.illness1,
      this.state.surgery,
      this.state.surgery1,
      this.state.medication,
      this.state.medication1,
      this.state.familyHistory,
      this.state.familyMember
    );

    this.prevStep();
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    //const { user } = this.context;
    const { classes } = this.props;
    const { step } = this.state;
    //console.log("ChildForm user", user);
    //console.log("this state", this.state.gender);
    switch (step) {
      case 0:
        return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <div className="container" style={myStyle}>
              <div style={{ flex: "6", padding: "40px" }}>
                <button onClick={this.onStart} style={startButton}>
                  Start
                </button>
              </div>
            </div>
          </Grid>
        );

      case 1:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Personal
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                />
              </Card>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Education
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Card>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Development
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Card>
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Illness
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Card>
            </Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Family
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Card>
            </Grid>
          </Grid>
        );

      case 6:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <Video onContinue={this.onContinue} onBack={this.onBack} />
              </Card>
            </Grid>
          </Grid>
        );

      case 7:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <NWR onContinue={this.onContinue} onBack={this.onBack} />
              </Card>
            </Grid>
          </Grid>
        );

      case 8:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <Card
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  overflowY: "scroll",
                }}
              >
                <SR
                  personal={this.state}
                  onChange={this.onChange}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Card>
            </Grid>
          </Grid>
        );
      case 9:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={3}
            >
              <div style={{ width: "70%", textAlign: "center" }}>
                <Sidebar step={this.state.step} />
              </div>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={9}
            >
              <p style={{ fontSize: "18px" }}>제출하시겠습니까?</p>
              <ChildFormSubmit
                onContinue={this.onContinue}
                input={this.state}
              />
            </Grid>
          </Grid>

          /* <div style={{ flex: "8", margin: "30px 160px" }}>
              <p>제출하시겠습니까?</p>
              <button onClick={this.onSubmit} style={startButton}>
                Submit
              </button>
            </div> */

          /* <Mutation
                mutation={SUBMIT_CHILD_FORM}
                variables={{
                  userId: user.id || "",
                  gender: this.state.gender || "",
                  name: this.state.name || "",
                  email: this.state.email || "",
                  dateOfBirth: this.state.dateOfBirth || "",
                  primaryLanguage: this.state.primaryLanguage || "",
                  education: this.state.education || "",
                  history: this.state.history || "",
                  problem: this.state.problem || "",
                  broSis: this.state.broSis || "",
                  impaired: this.state.impaired || "",
                  impairment: this.state.impairment || "",
                  schoolLanguage: this.state.schoolLanguage || "",
                  reason: this.state.reason || "",
                  improvement: this.state.improvement || "",
                  awareness: this.state.awareness || "",
                  institute: this.state.institute || "",
                  treatment: this.state.treatment || "",
                  teacherFeedback: this.state.teacherFeedback || "",
                  teacherFeedback1: this.state.teacherFeedback1 || "",
                  walkingAge: this.state.walkingAge || "",
                  speakingAge: this.state.speakingAge || "",
                  speakingAgeSentence: this.state.speakingAgeSentence || "",
                  developmentProblem: this.state.developmentProblem || "",
                  developmentProblem1: this.state.developmentProblem1 || "",
                  muscleProblem: this.state.muscleProblem || "",
                  muscleProblem1: this.state.muscleProblem1 || "",
                  illnessAtBirth: this.state.illnessAtBirth || "",
                  illnessAtBirth1: this.state.illnessAtBirth1 || "",
                  illness: this.state.illness || "",
                  illness1: this.state.illness1 || "",
                  surgery: this.state.surgery || "",
                  surgery1: this.state.surgery1 || "",
                  medication: this.state.medication || "",
                  medication1: this.state.medication1 || "",
                  familyHistory: this.state.familyHistory || "",
                  familyMember: this.state.familyMember || "",
                }}
                update={(cache, { data: { submitChildForm } }) => {
                  // mutation is successful
                  console.log("submitChildForm updated");
                }}
                onError={(error) => console.log("mutation error", error)}
              >
                {(submitChildForm) => (
                  <button onClick={submitChildForm} style={startButton}>
                    Submit
                  </button>
                )}
              </Mutation> */
        );

      default:
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
          >
            <p style={{ fontSize: "20px", margin: "50px 0px" }}>
              제출되었습니다. 평가 결과를 기다려주세요.
            </p>
          </Grid>
        );
    }
  }
}

const myStyle = {
  margin: "70px",
  display: "flex",
  flexDirection: "row",
};

const startButton = {
  color: "white",
  backgroundColor: "#6C2DC7",
  border: "none",
  fontSize: "16px",
  padding: "15px 30px",
};
ChildForm.propTypes = {
  form: PropTypes.array.isRequired,
};
export default withStyles(styles)(ChildForm);
