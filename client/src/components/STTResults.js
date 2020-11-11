import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ReactAudioPlayer from "react-audio-player";
var sampleResult = require("../demoTranscript/sttchildlang2.json");

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: "3px",
    borderColor: "#fed8b1",
    marginRight: 10,
  },
  testGrid: {
    height: "500px",
  },
  testGrid2: {
    height: "500px",
  },

  textCardGridImage: {
    // border: "solid",
    // borderWidth: "0.2px",
    // borderColor: "#888888",
    height: "60px",
    marginTop: "4px",
  },
  textCardGridText: {
    height: "60px",
    width: "100%",
    justifyContent: "center",
  },

  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    backgroundColor: "#ff8c00",
    color: "#ffffff",
    fontWeight: "bold",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testingCardChild: {
    width: "100%",
    height: "70px",
    margin: "10px",
    borderColor: "#90CAFF", //blue
    backgroundColor: "#f2f8fb",
    borderWidth: "3px",
    border: "solid",
  },

  testingCardParent: {
    width: "100%",
    height: "70px",
    margin: "10px",
    borderColor: "#FF9FCD", //pink
    backgroundColor: "#fff0f2",
    borderWidth: "3px",
    border: "solid",
  },

  reviewRatio: {
    height: "250px",
    borderTop: "solid",
    borderTopWidth: "0.2px",
    borderTopColor: "#D3D3D3",
    padding: "10px",
  },
  wrappingCard: {
    width: "100%",
    height: "100%",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#D3D3D3",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 20,
  },
}));

function STTResults() {
  const classes = useStyles();
  const [labeledTimeList, setLabeledTimeList] = useState([]);
  const [detectedTimeList, setDetectedTimeList] = useState([]);
  const [speechList, setSpeechList] = useState([]);

  // How Are we going to MERGE the Labeled Regions and the Detected Regions ????

  // Parent : Child
  const [speechRatio, setSpeechRatio] = useState({ parent: 50, child: 50 });
  const [speechRate, setSpeechRate] = useState({ parent: 3.1, child: 5.2 });
  //console.log("speechRatio", speechRatio.parent);
  //console.log("sample json", sampleResult.status);

  const speaker_segments = sampleResult.results.speaker_labels.segments;
  const text_items = sampleResult.results.items;
  //console.log("speaker_segments", speaker_segments);
  //console.log("text_items", text_items);

  // ----- Forming the Speech Cards -----
  // 1. Combine time splices with same speaker tag

  const SpeechCard = (image, speech) => (
    <Card
      className={
        image == "child" ? classes.testingCardChild : classes.testingCardParent
      }
    >
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
            <img height="100%" src="/childTagSvg.svg" />
          ) : (
            <img height="100%" src="/parentTagSvg.svg" />
          )}
        </Grid>
        <Grid
          className={classes.textCardGridText}
          container
          direction="column"
          alignItems="left"
          xs={10}
        >
          {/* <textarea height="100%" marginRight="10px">
            {speech}
          </textarea> */}
          <TextField defaultValue={speech} />
        </Grid>
      </Grid>
    </Card>
  );

  return (
    <Card className={classes.wrappingCard}>
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
            // className={classes.testGrid2}
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
              height="70px"
              marginBottom="50px"
              xs={12}
            >
              <Typography variant="h5">발화비율</Typography>
            </Grid>
            <Grid
              // className={classes.testGrid2}
              container
              direction="column"
              justify="center"
              alignItems="center"
              height="100px"
              xs={5}
            >
              <img width="60px" src="childTagSvg.svg" />
              <Typography variant="h7">30%</Typography>
            </Grid>
            :
            <Grid
              // className={classes.testGrid2}
              container
              direction="column"
              justify="center"
              alignItems="center"
              height="100px"
              xs={5}
            >
              <img width="60px" src="parentTagSvg.svg" />
              <Typography variant="h7">70%</Typography>
            </Grid>
          </Grid>
          <Grid
            // className={classes.testGrid2}
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
              height="70px"
              marginBottom="50px"
              xs={12}
            >
              <Typography variant="h5">이벤트 횟수</Typography>
            </Grid>
            <Grid
              // className={classes.testGrid2}
              container
              direction="column"
              justify="center"
              alignItems="center"
              height="100px"
              xs={5}
            >
              <img width="20px" src="star.png" />
              <Typography variant="h7">1 번</Typography>
            </Grid>
            :
            <Grid
              // className={classes.testGrid2}
              container
              direction="column"
              justify="center"
              alignItems="center"
              height="100px"
              xs={5}
            >
              <img width="20px" src="warning.png" />
              <Typography variant="h7">1 번</Typography>
            </Grid>
          </Grid>
          <Grid
            // className={classes.testGrid2}
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
    </Card>
  );
}



export default STTResults;
