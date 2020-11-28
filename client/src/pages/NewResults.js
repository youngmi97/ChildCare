import React, { useState, useContext, useEffect, useMemo } from "react";
import Scatter from "../components/charts/Scatter";
import Bar from "../components/charts/Bar";
import Column from "../components/charts/Column";
import Report from "../components/charts/Report";
import Vertical from "../components/charts/Vertical";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM } from "../Mutations";
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

  if (loading) {
    console.log("loading");
  } else {
    // console.log("got data", data);
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
      // console.log(
      //   "data.getChildForm",
      //   parseInt(data.getChildForm.educationScore, 10)
      // );
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
                    width = "400"
                    height = "250"
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
                <Bar
                    nwrScore={nwrScore} srScore={srScore}
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
                <p style={{ padding: "20px 50px" }}>
            {nwrFeedback}
          </p>
              </Grid>
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
                direction="column"
                justify="center"
                alignItems="center"
                xs={6}
                className={classes.text}
              >
                <p style={{ padding: "20px 50px" }}>
                {videoFeedback}
          </p>
              </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center" >
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
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
              className={classes.text}
            >
              <p style={{ padding: "20px 50px" }}>
                체언을 표현할 때 아동이’수혜자’를 사용하지 않고， 수식을 사용할
                때， 이유I, 비교‘,’양보’를 사용하지 않으며， 기능적
                구성요소에서’접속’을 사용하지 않았는데， 이 결과는
                김영태（1998）의 자료에 의하면， 아동의 의미유형 발달이 3세
                수준에도 미치지 못하고 있음을 알 수 있다． 의미관계 유형에서，
                3낱말．4낱말 사용이 매우 제한적이었으며， 문장간 의미관계유형은
                출현하지 않았다． 총 80개의 발화 중 낱말 조합수에 따라 가장 많이
                산출한 순서대로 의미관계 유형을 정리하면 다음과 같 다．{" "}
              </p>
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
            <p className={classes.ovr}>
              {" "}
              요약하면， 채 00 는 조음문제를 동반한 수용 및 표현 언어 발달지체로
              진단되었다． 아동의 수용 및 표현 언어연령이 대략 3세 6개월 정도로
              평가되어 아동 의 생활연령（5세 9개월）에 비해 많이 지체되어 있는
              것으로 나타났다． 또래 아동의 발달을 따라가고 있는 수준에
              있는（5세 5개월） 어휘 이해능력에 비하여 어휘 다양도가 낮았고，
              사용하고 있는 문장은 주로 단문 이며， 형태소의 이해 및 표현의
              제한성으로 인하여 복잡한 구문을 기능적으로 구성할 수 없었다．
            </p>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
