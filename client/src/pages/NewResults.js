import React, { useState, useContext, useEffect, useMemo } from "react";
import Scatter from "../components/charts/Scatter";
import Bar from "../components/charts/Bar";
import Column from "../components/charts/Column";
import Report from "../components/charts/Report";
import Vertical from "../components/charts/Vertical";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM, GET_PROF_COMMENTS } from "../Mutations";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ResultsStartPage from "../components/ResultsStartPage";
import StackedBar from "../components/charts/StackedBar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "50px",
  },
  chart: { marginLeft: "120px" },
  tag: {
    marginTop: "30px",
    marginLeft: "120px",
    fontWeight: "bold",
    fontSize: "16px",
    width: "90px",
    padding: "9px 0px",
    color: "#e57f16",
    textAlign: "flex-start",
  },
  divider: {},
  divider2: {
    paddingBottom: "30px",
  },
  text: {
    fontSize: "16px",
  },
  ovr: {
    width: "70%",
    paddingBottom: "70px",
    paddingTop: "30px",
    fontSize: "16px",
  },
}));

export default function NewResults() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);

  const onStart = () => {
    setStep(1);
  };

  //const [formData, setFormData] = useState({});

  //console.log("user Id", user.id);
  const { loading, error, data } = useQuery(GET_CHILD_FORM, {
    variables: { userId: user.id },
  });

  const { loading: loading2, error: error2, data: data2 } = useQuery(
    GET_PROF_COMMENTS,
    {
      variables: { userId: user.id },
    }
  );

  // if (loading) {
  //   console.log("loading");
  // } else {
  //   console.log("got data", data);
  // }

  if (loading2) {
    console.log("loading2");
  } else {
    console.log("got data2", data2);
  }

  const [eduScore, setEduScore] = useState(0);
  const [devScore, setDevScore] = useState(0);
  const [illScore, setIllScore] = useState(0);
  const [famScore, setFamScore] = useState(0);
  const [nwrScore, setNwrScore] = useState(90);
  const [srScore, setSrScore] = useState(70);
  const [parent, setParent] = useState(70);
  const [child, setChild] = useState(30);
  const [event1, setEvent1] = useState(2);
  const [event2, setEvent2] = useState(3);
  const [speed1, setSpeed1] = useState(3.4);
  const [speed2, setSpeed2] = useState(1.6);
  const [basicFeedback, setBasicFeedback] = useState("");
  const [eduFeedback, setEduFeedback] = useState("");
  const [devFeedback, setDevFeedback] = useState("");
  const [illFeedback, setIllFeedback] = useState("");
  const [famFeedback, setFamFeedback] = useState("");
  const [nwrFeedback, setNwrFeedback] = useState("");
  const [videoFeedback, setVideoFeedback] = useState("");
  const [ovrFeedback, setOvrFeedback] = useState("");

  useMemo(() => {
    if (!error && !loading) {
      setEduScore(parseInt(data.getChildForm.educationScore, 10));
      setDevScore(parseInt(data.getChildForm.developmentScore, 10));
      setIllScore(parseInt(data.getChildForm.illnessScore, 10));
      setFamScore(parseInt(data.getChildForm.familyScore, 10));
      //setBasicFeedback()
      //setEduFeedback()
      //setDevFeedback()
      //setIllFeedback()
      //setFamFeedback()
      //setNwrFeedback()
      //setVideoFeedback()
      //setOvrFeedback()
    }
  }, [data, error, loading]);

  useEffect(() => {
    if (!error2 && !loading2) {
      console.log("data2", data2);
      setBasicFeedback(data2.getProfComment.perFeedback);
      setEduFeedback(data2.getProfComment.eduFeedback);
      setDevFeedback(data2.getProfComment.devFeedback);
      setIllFeedback(data2.getProfComment.illFeedback);
      setFamFeedback(data2.getProfComment.famFeedback);
      setOvrFeedback(data2.getProfComment.ovrFeedback);
    }
  }, [data2, error2, loading2]);
  switch (step) {
    case 0: {
      return <ResultsStartPage onStart={onStart} />;
    }
    default: {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflowY: "scroll",
            padding: "0",
            scrollbarWidth: "none",
          }}
        >
          <div
            style={{
              backgroundImage: "url(/Results.jpg)",
              backgroundSize: "100vw 100vh",
              width: "100vw",
              height: "93vh",
              marginTop: "7vh",
            }}
          >
            <div
              style={{
                marginLeft: "7vw",
                paddingTop: "10vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "2vw",
                  fontWeight: "400",
                  color: "#e57f16",
                  marginBottom: "3vh",
                }}
              >
                online
              </div>
              <div
                style={{
                  fontSize: "4vw",
                  color: "#717071",
                  lineHeight: "8vh",
                  fontWeight: "300",
                  marginBottom: "4vh",
                }}
              >
                ASSESSMENT
                <br />
                RESULTS
              </div>
              <div>
                <hr
                  style={{
                    width: "3vw",
                    border: "none",
                    borderTop: "0.6vh solid #e57f16",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.5vw",
                  color: "#717071",
                  lineHeight: "4vh",
                  fontWeight: "300",
                  marginTop: "4vh",
                }}
              >
                Providing parental education <br />
                services for the purpose <br />
                of enhancing online interaction
              </div>
            </div>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            className={classes.root}
          >
            <Grid container justify="center" className={classes.divider}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <div className={classes.tag}>기본 정보</div>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.chart}
              >
                <Scatter
                  eduScore={eduScore}
                  devScore={devScore}
                  illScore={illScore}
                  famScore={famScore}
                  width="1000"
                  height="400"
                />
              </Grid>
            </Grid>

            <Grid container className={classes.divider}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <div className={classes.tag}>처리 능력</div>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.chart}
              >
                <Bar
                  nwrScore={nwrScore}
                  srScore={srScore}
                  width="1000"
                  height="400"
                />
              </Grid>
            </Grid>

            <Grid container className={classes.divider2}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <div className={classes.tag}>자발화 분석</div>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.chart}
              >
                <StackedBar parent={60} child={40} />
                <Column event1={2} event2={3} />
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.chart}
              >
                <Column event1={3.4} event2={2.8} />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <div className={classes.tag}>총평</div>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.chart}
              >
                <p className={classes.ovr}> {ovrFeedback}</p>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
