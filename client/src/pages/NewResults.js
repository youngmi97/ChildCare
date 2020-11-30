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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  tag: {
    marginTop: "30px",
    marginLeft: "50px",
    fontWeight: "bold",
    fontSize: "16px",
    width: "90px",
    padding: "9px 0px",
    color: "#FFB800",
    textAlign: "center",
  },
  divider: {
    borderBottom: "solid 2px #FFEBB8",
  },
  divider2: {
    borderBottom: "solid 2px #FFEBB8",
    paddingBottom: "30px",
  },
  text: {
    fontSize: "16px",
    fontFamily: "'Roboto', sans serif;",
  },
  ovr: {
    width: "70%",
    paddingBottom: "70px",
    paddingTop: "30px",
    fontSize: "16px",
    fontFamily: "'Roboto', sans serif;",
  },
}));

export default function NewResults() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

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

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
      className={classes.root}
    >
      <Card style={{ width: "100%", height: "100%", borderRadius: "0px" }}>
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
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <Scatter
                eduScore={eduScore}
                devScore={devScore}
                illScore={illScore}
                famScore={famScore}
                width="400"
                height="250"
              />
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
              className={classes.text}
            >
              <div>기본정보: {basicFeedback}</div>
              <div>교육력: {eduFeedback}</div>
              <div>발달력: {devFeedback} </div>
              <div>병력: {illFeedback}</div>
              <div>가족력: {famFeedback}</div>
            </Grid>
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
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <Bar nwrScore={nwrScore} srScore={srScore} />
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
              className={classes.text}
            >
              <p style={{ padding: "20px 50px" }}>{nwrFeedback}</p>
            </Grid>
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
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
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
                  direction="column"
                  justify="center"
                  alignItems="center"
                  xs={6}
                >
                  <Column parent={parent} child={child} />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  xs={6}
                >
                  <h3>MLU: 4.21단어 </h3>
                  <h3>Turn-taking: 3.42회</h3>
                </Grid>
              </Grid>

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
                  xs={6}
                >
                  <Vertical
                    event1={event1}
                    event2={event2}
                    chartName="이벤트 횟수"
                    color="yellow"
                    color2="red"
                  />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  xs={6}
                >
                  <Vertical
                    event1={speed1}
                    event2={speed2}
                    chartName="발화 속도"
                    color2="gray"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
              className={classes.text}
            >
              <p style={{ padding: "20px 50px" }}>{videoFeedback}</p>
            </Grid>
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
            justify="center"
            alignItems="center"
            xs={12}
          >
            <p className={classes.ovr}> {ovrFeedback}</p>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
