import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Button } from "@material-ui/core";
//import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import LinearProgress from "@material-ui/core/LinearProgress";
import "../App.css";

// TODO
// cancel animation control on key press
//

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
    backgroundColor: "#FFEBB8",
    fontSize: "16px",
  },

  testTitle: {
    fontSize: "16px",
    textAlign: "left",
    backgroundColor: "#FFB800",
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
    width: "80%",
    //backgroundColor: "#dedede",
    marginTop: "20px",
  },
  parentBar: {
    width: "100%",
    height: "20px",
    position: "relative",
  },
  parentInstance: {
    width: "30px",
    height: "5px",
    backgroundColor: "blue",
  },
  childBar: {
    width: "100%",
    height: "20px",
    position: "relative",
    marginTop: "5px",
  },
  childInstance: {
    width: "30px",
    height: "5px",
    backgroundColor: "red",
  },
  resetGrid: {
    marginTop: "30px",
  },
  timelineLabel: {
    marginRight: "10px",
    float: "right",
    marginBottom: "30px",
  },
}));

//Custom KeyPress Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

function VideoLabeling(props) {
  const classes = useStyles();
  const ref = useRef(null);

  const pPress = useKeyPress("p");
  const cPress = useKeyPress("c");
  const spacePress = useKeyPress(" ");

  // States to save the speaker time fragments
  const [parentTime, setParentTime] = useState([]);
  const [childTime, setChildTime] = useState([]);

  // States for speaker fragment ratio
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const [videos, setVideos] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(0);

  const [progress, setProgress] = useState(0);
  const [played, setPlayed] = useState(0);

  const [duration, setDuration] = useState();
  const [secondsElapsed, setSecondsElapsed] = useState();

  // States to store individual time fragments
  const [childLabels, setChildLabels] = useState([]);
  const [parentLabels, setParentLabels] = useState([]);

  const parentWidget = () => {
    const value = currentWidth * played;
    const offset = value.toString();
    // Offset from Left is not working
    return (
      <div
        // className={classes.parentInstance}
        // absolute position to allow overlap
        style={{
          width: "0.1px",
          height: "20px",
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
          width: "0.1px",
          height: "20px",
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
    //console.log("parent clicked");
    const newParentComponents = [...parentLabels, parentWidget];
    setParentLabels(newParentComponents);
  }

  function renderChildWidget() {
    //console.log("child clicked");
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
    //console.log("prop video changed");
    setVideos(props.videos);

    if (videos.length != 0) {
      //console.log("local videos", videos);
    }

    if (ref.current) {
      setCurrentWidth(ref.current.offsetWidth);
      //console.log("div pos", currentWidth * played);
    }

    if (pPress) {
      // Event for Marking Parent Speech
      //console.log("pPressed");

      async function renderParent() {
        await renderParentWidget();
        //update the starting time for parent time segment
        if (parentTime && parentTime.length === 0) {
          //adding new time segment
          const newTime = [...parentTime, {}];
          console.log("newTime", newTime);
          setParentTime(newTime);
          console.log("parentTime", parentTime);
        } else if (
          parentTime &&
          parentTime.length !== 0
          //parentTime[parentTime.length - 1].keys().length === 2
        ) {
          const currentTime = [...parentTime];
          //console.log("currentTime", currentTime);
          if (Object.keys(currentTime[currentTime.length - 1]).length === 2) {
            //adding new time segment
            const newTime = [...parentTime, {}];
            //console.log("newTime", newTime);
            setParentTime(newTime);
            //console.log("parentTime", parentTime);
          } else if (
            Object.keys(currentTime[currentTime.length - 1]).length === 0
          ) {
            //update starting time
            let newParentTime = [...parentTime];
            newParentTime[newParentTime.length - 1] = {
              start: duration * progress,
            };
            setParentTime(newParentTime);
            console.log("startTime", duration * progress);
          }
        }
        setParentCount((parentCount) => parentCount + 1);
      }
      renderParent();
    }

    if (cPress) {
      // Event for Marking Child Process
      //console.log("cPressed");
      async function renderChild() {
        await renderChildWidget();
        if (childTime && childTime.length === 0) {
          //adding new time segment
          const newTime = [...childTime, {}];
          console.log("newTime", newTime);
          setChildTime(newTime);
          console.log("parentTime", childTime);
        } else if (
          childTime &&
          childTime.length !== 0
          //parentTime[parentTime.length - 1].keys().length === 2
        ) {
          const currentTime = [...childTime];
          //console.log("currentTime", currentTime);
          if (Object.keys(currentTime[currentTime.length - 1]).length === 2) {
            //adding new time segment
            const newTime = [...childTime, {}];
            //console.log("newTime", newTime);
            setChildTime(newTime);
            //console.log("parentTime", parentTime);
          } else if (
            Object.keys(currentTime[currentTime.length - 1]).length === 0
          ) {
            //update starting time
            let newChildTime = [...childTime];
            newChildTime[newChildTime.length - 1] = {
              start: duration * progress,
            };
            setChildTime(newChildTime);
            console.log("startTime", duration * progress);
          }
        }
        setChildCount((childCount) => childCount + 1);
      }
      renderChild();
    }
    if (spacePress) {
      console.log("space Pressed");
    }
  }, [props.videos, videos, ref.current, played, pPress, cPress, spacePress]);

  useEffect(() => {
    if (!pPress && !cPress && !spacePress) {
      // Event for Stop Marking Process
      console.log("key Unpressed");

      if (!pPress) {
        console.log("parentCnt", parentCount);
        if (parentTime && parentTime.length != 0) {
          const currentTime = [...parentTime];
          if (Object.keys(currentTime[currentTime.length - 1]).length === 1) {
            //update ending time
            let newParentTime = [...parentTime];
            newParentTime[newParentTime.length - 1].end = duration * progress;
            setParentTime(newParentTime);
            console.log("parentTime", parentTime);
          }
        }
        setParentCount(0);
      }

      if (!cPress) {
        console.log("childCnt", childCount);
        if (childTime && childTime.length != 0) {
          const currentTime = [...childTime];
          if (Object.keys(currentTime[currentTime.length - 1]).length === 1) {
            //update ending time
            let newChildTime = [...childTime];
            newChildTime[newChildTime.length - 1].end = duration * progress;
            setChildTime(newChildTime);
            console.log("parentTime", childTime);
          }
        }
        setChildCount(0);
      }
    }
  }, [pPress, cPress, spacePress]);

  const onSubmit = () => {
    // console.log("on submit");
    // pass parentTime and childTime to parent component
    props.parentTimeLabeled(parentTime);
    props.childTimeLabeled(childTime);
  };

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
          direction="row"
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
            <LinearProgress
              variant="determinate"
              value={progress}
              style={{ marginTop: "5px" }}
            />
            <div className={classes.childBar}>
              {childLabels.length !== 0 &&
                childLabels.map((Widget, i) => <Widget key={i} />)}
            </div>
            <div className={classes.timelineLabel}>Timeline</div>
          </div>
          <div
            className={classes.resetGrid}
            container
            direction="column"
            xs={12}
          >
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "10px" }}
              // className={classes.speechCard}
              onClick={() => {
                setParentLabels([]);
                setParentTime([]);
              }}
            >
              {" Reset Parent "}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "10px" }}
              // className={classes.speechCard}
              onClick={() => {
                setChildLabels([]);
                setChildTime([]);
              }}
            >
              {" Reset Child "}
            </Button>
          </div>

          {/* <div class="graybox"></div> */}
          <div className={classes.resetGrid}>
            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
              style={{ margin: "10px" }}
              onClick={onSubmit}
            >
              {"Finish Labeling"}
            </Button>
          </div>
        </Grid>
        <Grid
          className={classes.testGrid2}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <p>
            부모님이 말할 때 <span style={{ fontWeight: "bold" }}>‘P’</span>를
            눌러주세요.
          </p>
          <p>
            아이들이 말할 때 <span style={{ fontWeight: "bold" }}>‘C’</span>를
            눌러주세요.
          </p>
          <p>
            경고를 주고 싶을 때 <span style={{ fontWeight: "bold" }}>W</span>를
            눌러주세요.
          </p>
          <p>
            영상에 표시하고 싶을 때{" "}
            <span style={{ fontWeight: "bold" }}>‘S’</span>를 눌러주세요.
          </p>
        </Grid>
      </Grid>
    </Card>
  );
}

export default VideoLabeling;
