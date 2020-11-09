import React, { useContext } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import STTResults from "../components/STTResults";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";
function STT() {
  const { user } = useContext(AuthContext);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      direction="row"
    >
      {/* <SpeechToText /> */}
      <VideoLabeling />
      <STTResults />
    </Grid>
  );
}

export default STT;
