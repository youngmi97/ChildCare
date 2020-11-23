import React, { useContext, useState, useEffect } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import STTResults from "../components/STTResults";
import STTUploadVideo from "../components/STTUploadVideo";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";
const axios = require("axios");

function STT() {
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);

  const [childTimeLabel, setChildTimeLabel] = useState([]);
  const [parentTimeLabel, setParentTimeLabel] = useState([]);

  function handleVideoUpload(videoData) {
    console.log("here now", videoData);
    setVideoFiles(videoData);
  }

  function handleParentTimeLabel(timeFrag) {
    console.log("parent time", timeFrag);
    setParentTimeLabel(timeFrag);
  }

  function handleChildTimeLabel(timeFrag) {
    console.log("child time", timeFrag);
    setChildTimeLabel(timeFrag);
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log("videoFile data changed");
      // test api gateway REST call
      const api =
        "https://85sgmxl2m9.execute-api.us-east-1.amazonaws.com/staging2";
      const data = { name: "Mike" };

      // Something wrong on the lambda side

      axios
        .post(api, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [videoFiles]);

  // Check Successful Prop Pass via show/hide of STTResults Component

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      direction="row"
    >
      {/* <SpeechToText /> */}
      <STTUploadVideo parentUploadTrigger={handleVideoUpload} />
      <VideoLabeling
        videos={videoFiles}
        parentTimeLabeled={handleParentTimeLabel}
        childTimeLabeled={handleChildTimeLabel}
      />
      <STTResults parentLabel={parentTimeLabel} childLabel={childTimeLabel} />
    </Grid>
  );
}

export default STT;
