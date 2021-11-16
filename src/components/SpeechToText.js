import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Grid } from "@material-ui/core";
// 1. Parse Transcript Json
// 2. Get metadata of the audio file (length of audio etc.)
// 3. Audio Progress bar with div for each individual

// https://codesandbox.io/s/xlknzw4yr4?file=/src/index.js:78-107

// Stop current animation : stop()
// Check if animation in progress : isAnimating()
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

  progressThumbParent: {
    width: 5,
    height: 20,
    backgroundColor: "red",
  },

  progressThumbChild: {
    width: 5,
    height: 20,
    backgroundColor: "blue",
  },

  progressLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
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

function SpeechToText() {
  const classes = useStyles();
  const muiTheme = createMuiTheme({});
  const src = [
    "https://sttdemoaudio.s3.us-east-2.amazonaws.com/audioUpload/demoTrimmed2.wav",
  ];

  // KeyPressEvents
  const pPress = useKeyPress("p");
  const cPress = useKeyPress("c");
  const spacePress = useKeyPress(" ");

  const [progressPos, setProgressPos] = useState(0);
  const [progressState, setProgressState] = useState(true);

  // Dynamic Component render
  const [recordComponents, setRecordComponents] = useState([]);

  const Widget = ({ text }) => <p>{text}</p>;

  function renderWidget() {
    console.log("I was clicked");
    const newComponents = [...recordComponents, Widget];
    setRecordComponents(newComponents);
  }

  //useMotionValue
  const x = useMotionValue(0);

  const parentProgressComponent = (
    <motion.div
      className={classes.progressThumbParent}
      style={{ x }}
      animate={{ x: 400 }}
      transition={{ duration: 30 }}
      onChange={(e) => console.log("parent thumb change", e)}
    />
  );

  const childProgressComponent = (
    <motion.div
      className={classes.progressThumbChild}
      animate={{ x: 400 }}
      transition={{ duration: 30 }}
    />
  );

  // Track Motion Value
  useEffect(() => {
    x.onChange((latest) => {
      setProgressPos(latest);
    });
    if (pPress) {
      // Event for Marking Parent Speech
      console.log("pPressed");
    }
    if (!pPress && !cPress && !spacePress) {
      // Event for Stop Marking Process
      console.log("key Unpressed");
    }
    if (cPress) {
      // Event for Marking Child Process
      console.log("cPressed");
    }
    if (spacePress) {
      console.log("space Pressed");
      setProgressState(!progressState);
      if (progressState) {
        // Need a way to resume stopped Motion
        // x.start({
        //   x: progressPos,
        //   transition: { duration: 30 },
        // });
        console.log("progress TRUE");
      } else {
        x.stop();
        console.log("progress FALSE");
      }
    }
  }, [x, pPress, cPress, spacePress]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <ThemeProvider theme={muiTheme}>
        <Grid item xs={12}>
          <AudioPlayer
            elevation={1}
            variation="default"
            spacing={3}
            download={true}
            autoplay={false}
            order="standart"
            preload="auto"
            loop={true}
            src={src}
          />
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            {parentProgressComponent}
          </Grid>
          <Grid item xs={12}>
            <div className={classes.progressLine}></div>
          </Grid>
          <Grid item xs={12}>
            {childProgressComponent}
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={6}>
            <button
              className={classes.speechCard}
              onClick={() => renderWidget()}
            >
              {" "}
              Testing Event Render
            </button>
          </Grid>
          <Grid item xs={6}>
            <div>
              {recordComponents.length !== 0 &&
                recordComponents.map((Widget, i) => (
                  <Widget key={i} text="Testing" />
                ))}
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}

export default SpeechToText;
