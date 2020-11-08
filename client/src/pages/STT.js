import React, { useContext } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";
function STT() {
  const { user } = useContext(AuthContext);
  //console.log("user info", user);

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
    </Grid>
  );
}

export default STT;
