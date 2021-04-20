import React, { Component, View } from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Personal from "./questions/Personal";
import Education from "./questions/Education";
import Development from "./questions/Development";
import Illness from "./questions/Illness";
import Family from "./questions/Family";
import Video from "./questions/Video";
import NWR from "./questions/NWR";
import SR from "./questions/SR";
import ChildFormSubmit from "./ChildFormSubmit";
import StartPage from "./questions/StartPage";

const styles = (theme) => ({
  root: {
    marginTop: "50px",
  },

  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
  step: {
    fontFamily: "'Noto Sans KR', sans-serif;",
    height: "65px",
    borderTop: "7.5px solid #FFB800",
  },
  trapezoid: {
    backgroundColor: "#FFEBB8",
    height: "100%",
    width: "100%",
  },
  title: {
    marginTop: "25px",
    marginLeft: "120px",
    marginRight: "120px",
    fontSize: "25px",
    color: "#e57f16",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "120px",
    marginRight: "120px",
    marginBottom: "30px",
    fontSize: "16px",
    fontWeight: "normal",
  },
});

class NewChildForm extends Component {
  componentDidUpdate(prevstate) {
    if (prevstate.videoFiles !== this.state.videoFiles) {
      console.log(this.state.videoFiles[0]);
    }
  }

  state = {
    step: 1,
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
    videoFiles: "",
    nwrFile: "",
    srFile: "",
  };

  onStart = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  handleVideoUpload = (videoData) => {
    console.log("here now", videoData);
    this.setState({ videoFiles: videoData });
  };

  handleNwrUpload = (nwrData) => {
    console.log("here now", nwrData);
    this.setState({ nwrFile: nwrData });
  };

  handleSrUpload = (srData) => {
    console.log("here now", srData);
    this.setState({ srFile: srData });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.nextStep();
    // Mutation To DB should happen here
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });
  onChange2 = (e) => this.setState({ [e.target.name]: e.target.value });
  onChange3 = (members) => {
    this.setState({ familyMember: members });
  };

  onContinue = (e) => {
    //e.preventDefault();
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
    window.scrollTo(0, 0);
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    window.scrollTo(0, 0);
  };

  render() {
    const { classes } = this.props;
    const { step } = this.state;

    switch (step) {
      case 0: {
        return <StartPage onStart={this.onStart} />;
      }
      case 1: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                1 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Personal
                  personal={this.state}
                  onChange={this.onChange}
                  onChange2={this.onChange2}
                  onContinue={this.onContinue}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                2 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <Education
                  personal={this.state}
                  onChange={this.onChange}
                  onChange2={this.onChange2}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 3: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                3 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <Development
                  personal={this.state}
                  onChange={this.onChange}
                  onChange2={this.onChange2}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 4: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                4 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <Illness
                  personal={this.state}
                  onChange={this.onChange}
                  onChange2={this.onChange2}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 5: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                5 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <Family
                  personal={this.state}
                  onChange3={this.onChange3}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 6: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                6 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <Video
                  parentUploadTrigger={this.handleVideoUpload}
                  videos={this.state.videoFiles}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 7: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                7 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <NWR
                  parentUploadTrigger={this.handleNwrUpload}
                  videos={this.state.nwrFile}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 8: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <div style={{ fontSize: "20px", marginBottom: "3vh" }}>
                PAGE{" "}
                <span style={{ color: "#e57f16", margin: "0px 10px" }}>
                  &#10092;
                </span>{" "}
                8 of 8
              </div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <SR
                  parentUploadTrigger={this.handleSrUpload}
                  videos={this.state.srFile}
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      case 9: {
        return (
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.step}
              ></Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <ChildFormSubmit
                  onContinue={this.onContinue}
                  onBack={this.onBack}
                  input={this.state}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
      default: {
        return (
          <div style={{ height: "40vh" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.root}
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.step}
              ></Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.title}
              >
                <p style={{ marginBottom: "4vh" }}>감사합니다.</p>
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
                  평가결과를 기다려주세요. 평가가 완료되면 전문가로부터 이메일이
                  올 것입니다.
                </p>
              </Grid>
            </Grid>
          </div>
        );
      }
    }
  }
}

export default withStyles(styles)(NewChildForm);
