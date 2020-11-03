import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Grid } from "@material-ui/core";
// 1. Parse Transcript Json
// 2. Get metadata of the audio file (length of audio etc.)
// 3. Audio Progress bar with div for each individual

// import { Data, Override } from "framer";
// const data = Data({
//   rotate: 0,
// });

// function Rotate(): Override {
//   return {
//     animate: { rotate: data.rotate },
//     onTap() {
//       data.rotate = data.rotate + 90;
//     },
//   };
// }

// https://codesandbox.io/s/xlknzw4yr4?file=/src/index.js:78-107
// Create Component on Event using list of components on states

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

function SpeechToText() {
  const classes = useStyles();
  const muiTheme = createMuiTheme({});
  const src = [
    "https://sttdemoaudio.s3.us-east-2.amazonaws.com/audioUpload/demoTrimmed2.wav",
  ];

  const [recordComponents, setRecordComponents] = useState([]);

  const Widget = ({ text }) => <p>{text}</p>;

  function renderWidget() {
    console.log("I was clicked");
    const newComponents = [...recordComponents, Widget];
    setRecordComponents(newComponents);
  }

  // const dynamicDiv = ({ position }) => (
  //   <div className={classes.progressThumbParent}></div>
  // );

  // const x = useMotionValue(10);
  // const y = useTransform(x, (value) => value * 2);
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
            <motion.div
              className={classes.progressThumbParent}
              animate={{ x: 400 }}
              transition={{ duration: 30 }}
              onChange={(e) => console.log("parent thumb change", e)}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.progressLine}></div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className={classes.progressThumbChild}
              animate={{ x: 400 }}
              transition={{ duration: 30 }}
            />
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
