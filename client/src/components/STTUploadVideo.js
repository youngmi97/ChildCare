import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import VideoDragDrop from "./VideoDragDrop";
const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },
  testGrid: {
    height: "300px",
  },

  testingCard: {
    width: "60%",
    height: "60px",
    justifyContent: "center",
  },
  wrappingCard: {
    width: "100%",
    height: "100%",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#D3D3D3",
    borderRadius: 16,
  },
}));

function STTUplaodVideo(props) {
  const classes = useStyles();

  function handleVideoUpload(videoData) {
    props.parentUploadTrigger(videoData);
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <Card className={classes.wrappingCard}>
        <Grid className={classes.testTitle} container direction="row" xs={12}>
          비디오 업로드 단계
        </Grid>
        <Grid
          className={classes.testGrid}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
        >
          {/* <Card className={classes.testingCard}>Video Uploading Prompt</Card> */}
          <VideoDragDrop uploadCallBack={handleVideoUpload} />
        </Grid>
      </Card>
    </Grid>
  );
}

export default STTUplaodVideo;
