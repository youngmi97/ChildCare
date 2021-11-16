import React, { useState, useContext, useEffect, useMemo } from "react";
import Scatter from "../components/charts/Scatter";
import Bar from "../components/charts/Bar";
import Column from "../components/charts/Column";
import Report from "../components/charts/Report";
import Vertical from "../components/charts/Vertical";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM, GET_PROF_COMMENTS } from "../Mutations";
import { Grid, CircularProgress } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ResultsStartPage from "../components/ResultsStartPage";
import StackedBar from "../components/charts/StackedBar";
import MenuBar from "../components/MenuBar";

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
  const {
    loading: loading,
    error: error,
    data: data,
  } = useQuery(GET_CHILD_FORM, {
    variables: { userId: user.id },
  });

  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(GET_PROF_COMMENTS, {
    variables: { userId: user.id },
  });

  if (loading) {
    console.log("loading");
  } else {
    console.log("got GET_CHILD_FORM data", data);
  }

  if (loading2) {
    console.log("loading2");
  } else {
    console.log("got GET_PROF_COMMENTS data2", data2);
  }

  const [eduScore, setEduScore] = useState(null);
  const [devScore, setDevScore] = useState(null);
  const [illScore, setIllScore] = useState(null);
  const [famScore, setFamScore] = useState(null);
  const [nwrScore, setNwrScore] = useState(null);
  const [srScore, setSrScore] = useState(null);
  const [parent, setParent] = useState(70);
  const [child, setChild] = useState(30);
  const [event1, setEvent1] = useState(2);
  const [event2, setEvent2] = useState(3);
  const [speed1, setSpeed1] = useState(3.4);
  const [speed2, setSpeed2] = useState(1.6);

  const [ovrFeedback, setOvrFeedback] = useState("");
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  useEffect(() => {
    if (!error && !loading) {
      console.log("set VALUE", parseInt(data.getChildForm.educationScore, 10));

      setEduScore(parseInt(data.getChildForm.educationScore, 10));
      setDevScore(parseInt(data.getChildForm.developmentScore, 10));
      setIllScore(parseInt(data.getChildForm.illnessScore, 10));
      setFamScore(parseInt(data.getChildForm.familyScore, 10));
      setLoaded1(true);
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
      setOvrFeedback(data2.getProfComment.ovrFeedback);
      setNwrScore((data2.getProfComment.nwrScore / 15) * 100);
      setSrScore((data2.getProfComment.srScore / 12) * 100);
      setLoaded2(true);
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
          <MenuBar />
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
          {data ? (
            loaded1 ? (
              loaded2 ? (
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
                    </Grid>
                    <div style={{ marginLeft: "120px" }}>이벤트 횟수</div>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      xs={12}
                      className={classes.chart}
                    >
                      <Column
                        event1={2}
                        event2={3}
                        colors={["#F9BE00", "#F53535"]}
                      />
                    </Grid>

                    <div style={{ marginLeft: "120px" }}>발화속도</div>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      xs={12}
                      className={classes.chart}
                    >
                      <Column
                        event1={3.4}
                        event2={2.8}
                        colors={["#3BB9FF", "#AEAEAE"]}
                      />
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
              ) : (
                <div style={{ marginBottom: "10vh", marginLeft: "5vw" }}>
                  <div
                    style={{
                      fontSize: "1.5vw",
                      color: "#e57f16",
                      marginLeft: "1.2vw",
                      marginTop: "10vh",
                      marginBottom: "5vh",
                    }}
                  >
                    평가 결과를 기다리는 중입니다.
                  </div>

                  <div
                    style={{
                      marginLeft: "1.2vw",
                      color: "#313031",
                      fontSize: "1.2vw",
                      marginTop: "2vh",
                    }}
                  >
                    연락처 : sunyim@isay.com
                  </div>
                  <div
                    style={{
                      marginLeft: "1.2vw",
                      color: "#313031",
                      fontSize: "1.2vw",
                      marginTop: "1.2vh",
                    }}
                  >
                    전화 : 010.0000.0000
                  </div>
                </div>
              )
            ) : (
              <div>
                <CircularProgress />
              </div>
            )
          ) : (
            <div style={{ marginBottom: "10vh", marginLeft: "5vw" }}>
              <div
                style={{
                  fontSize: "1.5vw",
                  color: "#e57f16",
                  marginLeft: "1.2vw",
                  marginTop: "10vh",
                  marginBottom: "5vh",
                }}
              >
                언어발달 평가를 먼저 완료해 주세요.
              </div>

              <div
                style={{
                  marginLeft: "1.2vw",
                  color: "#313031",
                  fontSize: "1.2vw",
                  marginTop: "2vh",
                }}
              >
                연락처 : sunyim@isay.com
              </div>
              <div
                style={{
                  marginLeft: "1.2vw",
                  color: "#313031",
                  fontSize: "1.2vw",
                  marginTop: "1.2vh",
                }}
              >
                전화 : 010.0000.0000
              </div>
            </div>
          )}
          <div
            style={{
              width: "100vw",
              height: "20vh",
              backgroundColor: "#F9BE00",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                marginLeft: "15vw",
                paddingTop: "3vh",
                marginBottom: "3vh",
              }}
            >
              <img src="/002.png" width="60px" height="60px" />
              <div
                style={{
                  fontSize: "16px",
                  color: "white",
                  marginBottom: "12px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                개인정보 처리방침
              </div>
              <div
                style={{
                  fontSize: "16px",
                  marginBottom: "12px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                이용 약관
              </div>
              <div
                style={{
                  fontSize: "16px",
                  marginBottom: "12px",
                  marginLeft: "30px",
                  fontWeight: "600",
                }}
              >
                윤리 경영
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                marginLeft: "15vw",
                fontWeight: "bold",
                fontSize: "16px",
                marginTop: "1.2vh",
              }}
            >
              <div>대표전화 010.0000.0000 </div>
              <div style={{ margin: "0px 1vw" }}>|</div>
              <div>대표이메일 sunyim@isay.com </div>
              <div style={{ margin: "0px 1vw" }}>|</div>
              <div>
                서울 서대문구 이화여대길 52 이화여자대학교, 교육관 A동 502호 I
                SAY LAB{" "}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
