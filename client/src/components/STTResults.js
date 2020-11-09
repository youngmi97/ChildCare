import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
  testGrid: {
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#D3D3D3",
    height: "300px",
  },
  testGrid2: {
    height: "300px",
  },

  textCardGridImage: {
    // border: "solid",
    // borderWidth: "0.2px",
    // borderColor: "#888888",
    height: "60px",
  },
  textCardGridText: {
    height: "60px",
    width: "100%",
    justifyContent: "center",
  },

  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testingCard: {
    width: "100%",
    height: "60px",
    margin: "10px",
  },

  reviewRatio: {
    height: "500px",
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#D3D3D3",
    padding: "10px",
  },
}));

function STTResults() {
  const classes = useStyles();

  const SpeechCard = (image, speech) => (
    <Card className={classes.testingCard}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          className={classes.textCardGridImage}
          container
          direction="column"
          justify="left"
          alignItems="center"
          xs={2}
        >
          {image == "child" ? (
            <img height="100%" src="/childTag.png" />
          ) : (
            <img height="100%" src="/parentTag.png" />
          )}
        </Grid>
        <Grid
          className={classes.textCardGridText}
          container
          direction="column"
          alignItems="left"
          xs={10}
        >
          <textarea height="100%" marginRight="10px">
            {speech}
          </textarea>
        </Grid>
      </Grid>
    </Card>
  );

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <Grid className={classes.testTitle} container direction="row" xs={12}>
        최종 STT 결과물 표출
      </Grid>
      <Grid
        className={classes.testGrid}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        xs={8}
      >
        <Card
          style={{
            height: "100%",
            width: "100%",
            padding: "20px",
            overflowY: "scroll",
          }}
        >
          {SpeechCard("parent", "차 한 번 놀아 봅시다.")}
          {SpeechCard("parent", "우리 사람 지은이의 와 여기가 어디야?")}
          {SpeechCard("child", "지고 동물 한 동물원이 것 같다.")}
          {SpeechCard(
            "parent",
            "한번 지은이가 마음대로 바꾸는 가까이 와서 동물원은 가보다"
          )}
          {SpeechCard("child", "기차가 경우")}
          {SpeechCard("parent", "축으로 친구들이 있네.")}
          {SpeechCard("child", "칠.")}
          {SpeechCard("child", "그렇게 내리면 기차가")}
          {SpeechCard("parent", "칙칙폭폭")}
        </Card>
      </Grid>
      <Grid
        className={classes.testGrid}
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={4}
      >
        <ReactAudioPlayer
          src="../demoAudio/demoTrimmed2.wav"
          autoplay
          controls
          onCanPlay={() => console.log("audio has been loaded")}
          onPause={(e) => console.log("paused")}
          onPlay={(e) => console.log("played")}
        />
      </Grid>
      <Grid
        className={classes.reviewRatio}
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          className={classes.testGrid2}
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            {" "}
            발화비율
          </Grid>
          <Grid
            className={classes.testGrid2}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={5}
          >
            <img width="100px" src="childTag.png" />
            <p>30%</p>
          </Grid>
          :
          <Grid
            className={classes.testGrid2}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={5}
          >
            <img width="100px" src="parentTag.png" />
            <p>70%</p>
          </Grid>
        </Grid>
        <Grid
          className={classes.testGrid2}
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            {" "}
            이벤트 횟수
          </Grid>
          <Grid
            className={classes.testGrid2}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={5}
          >
            <img width="50px" src="star.png" />
            <p>1번</p>
          </Grid>
          :
          <Grid
            className={classes.testGrid2}
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={5}
          >
            <img width="50px" src="warning.png" />
            <p>1번</p>
          </Grid>
        </Grid>
        <Grid
          className={classes.testGrid2}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <p>결과 분석 및 코멘트</p>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default STTResults;
