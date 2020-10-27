import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

// 1. Parse Transcript Json
// 2. Get metadata of the audio file (length of audio etc.)
// 3. Audio Progress bar with div for each individual

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
}));

function SpeechToText() {
  const classes = useStyles();
  const muiTheme = createMuiTheme({});
  const src = [
    "https://sttdemoaudio.s3.us-east-2.amazonaws.com/audioUpload/demoTrimmed2.wav",
  ];
  return (
    <ThemeProvider theme={muiTheme}>
      <AudioPlayer
        elevation={1}
        width="100%"
        variation="default"
        spacing={3}
        download={true}
        autoplay={true}
        order="standart"
        preload="auto"
        loop={true}
        src={src}
      />
      {/* <div className={classes.speechCard}> Speaker </div>
      <div className={classes.speechCard}> Speaker </div>
      <div className={classes.speechCard}> Speaker </div> */}
    </ThemeProvider>
  );
}

export default SpeechToText;
