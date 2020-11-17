import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
  testGrid1: {
    borderRight: "solid",
    borderRightWidth: "0.2px",
    borderRightColor: "#D3D3D3",
    height: "600px",
  },
  testGrid2: {
    height: "600px",
    backgroundColor: "#ffecd8",
    fontSize: "20px",
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
  wrappingCard: {
    width: "100%",
    height: "100%",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#D3D3D3",
    borderRadius: 16,
    marginTop: 10,
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#dedede",
    marginTop: "20px",
  },
  parentBar: {
    width: "100%",
    height: "10px",
    position: "relative",
  },
  parentInstance: {
    width: "30px",
    height: "5px",
    backgroundColor: "blue",
  },
  childBar: {
    width: "100%",
    height: "10px",
    position: "relative",
  },
  childInstance: {
    width: "30px",
    height: "5px",
    backgroundColor: "red",
  },
}));

function VideoLabeling(props) {
  const classes = useStyles();
  const ref = useRef(null);

  const [videos, setVideos] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(0);

  const [progress, setProgress] = useState(0);
  const [played, setPlayed] = useState(0);

  const [duration, setDuration] = useState();
  const [secondsElapsed, setSecondsElapsed] = useState();

  const [childLabels, setChildLabels] = useState([]);
  const [parentLabels, setParentLabels] = useState([]);

  const parentWidget = () => {
    const value = currentWidth * played;
    const offset = value.toString();
    // Offset from Left is not working
    return (
      <div
        //className={classes.parentInstance}
        // absolute position to allow overlap
        style={{
          width: "30px",
          height: "10px",
          backgroundColor: "#FF9FCD",
          verticalAlign: "top",
          display: "inline-block",
          left: offset + "px",
          position: "absolute",
        }}
      ></div>
    );
  };
  const childWidget = () => {
    const value = currentWidth * played;
    const offset = value.toString();
    // Offset from Left is not working
    return (
      <div
        //className={classes.parentInstance}
        // absolute position to allow overlap
        style={{
          width: "30px",
          height: "10px",
          backgroundColor: "#90CAFF",
          verticalAlign: "top",
          display: "inline-block",
          left: offset + "px",
          position: "absolute",
        }}
      ></div>
    );
  };

  function renderParentWidget() {
    console.log("parent clicked");
    const newParentComponents = [...parentLabels, parentWidget];
    setParentLabels(newParentComponents);
  }

  function renderChildWidget() {
    console.log("child clicked");
    const newChildComponents = [...childLabels, childWidget];
    setChildLabels(newChildComponents);
  }

  const onDuration = (timeSpan) => {
    //in seconds
    setDuration(timeSpan);
  };

  const onProgress = (time) => {
    //console.log("time", time);
    if (!duration) {
      // Sadly we don't have the duration yet so we can't do anything
      return;
    }

    // time.played is the fraction of the video that has been played
    // so multiply with duration to get number of seconds elapsed
    const secondsElapsedCalc = time.played * duration;
    const portion = 100 * time.played;
    setPlayed(time.played);
    setProgress(portion);

    if (secondsElapsedCalc !== secondsElapsed) {
      //console.log("secondsElapsed", secondsElapsed);
      setSecondsElapsed(secondsElapsedCalc);
    }
  };

  const audioSrc =
    "https://sttdemoaudio.s3.us-east-2.amazonaws.com/audioUpload/demoTrimmed2.wav";

  useEffect(() => {
    console.log("prop video changed");
    setVideos(props.videos);

    if (videos.length != 0) {
      console.log("local videos", videos);
    }

    if (ref.current) {
      setCurrentWidth(ref.current.offsetWidth);
      console.log("div pos", currentWidth * played);
    }
  }, [props.videos, videos, ref.current, played]);

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
          비디오 라벨링 단계
        </Grid>
        <Grid
          className={classes.testGrid1}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={8}
        >
          {/* <ReactAudioPlayer
            src="../demoAudio/demoTrimmed2.wav"
            autoplay
            controls
            onCanPlay={() => console.log("audio has been loaded")}
            onPause={(e) => console.log("paused")}
            onPlay={(e) => console.log("played")}
          /> */}
          {videos[0] ? (
            <ReactPlayer
              url={videos[0].preview}
              width="80%"
              // height="360px"
              controls={true}
              onDuration={onDuration}
              onProgress={onProgress}
              progressInterval={10}
            />
          ) : (
            <ReactPlayer
              url={"test"}
              width="80%"
              // height="360px"
              controls={true}
            />
          )}
          {/* <img width="100%" src="/progressLabelSample.png"></img> */}
          <div className={classes.progressBar} ref={ref}>
            <div className={classes.parentBar}>
              {parentLabels.length !== 0 &&
                parentLabels.map((Widget, i) => <Widget key={i} />)}
            </div>
            <LinearProgress variant="determinate" value={progress} />
            <div className={classes.childBar}>
              {childLabels.length !== 0 &&
                childLabels.map((Widget, i) => <Widget key={i} />)}
            </div>
          </div>
          <button
            // className={classes.speechCard}
            onClick={() => renderParentWidget()}
          >
            {" Testing Parent Click "}
          </button>
          <button
            // className={classes.speechCard}
            onClick={() => renderChildWidget()}
          >
            {" Testing Child Click "}
          </button>
        </Grid>
        <Grid
          className={classes.testGrid2}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <p>부모님이 말할 때 ‘P’를 눌러주세요.</p>
          <p>아이들이 말할 때 ‘C’를 눌러주세요.</p>
          <p>경고를 주고 싶을 때 ‘W’를 눌러주세요.</p>
          <p>영상에 표시하고 싶을 때 ‘S’를 눌러주세요.</p>
        </Grid>
      </Grid>
    </Card>
  );
}

export default VideoLabeling;
