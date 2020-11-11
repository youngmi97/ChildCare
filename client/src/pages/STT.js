import React, { useContext, useState, useEffect } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import STTResults from "../components/STTResults";
import STTUploadVideo from "../components/STTUploadVideo";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";
function STT() {
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);

  function handleVideoUpload(videoData) {
    console.log("here now", videoData);
    setVideoFiles(videoData);
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log("videoFile data changed");
    }
  }, [videoFiles]);

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
      <VideoLabeling videos={videoFiles} />
      <STTResults />
    </Grid>
  );
}

export default STT;
