import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import VideoDragDrop from "../../components/VideoDragDrop";

const useStyles = makeStyles((theme) => ({
  grid1: {
    padding: "50px",
    fontSize: "30px",
    fontWeight: "bold",
  },

  grid2: {
    padding: "20px",
    fontSize: "18px",
    fontWeight: "normal",
  },

  grid3: {
    padding: "50px",
    fontSize: "18px",
    fontWeight: "normal",
  },

  dragdrop: {
    padding: "20px",
    marginBottom: "50px",
  },
  bar: {
    padding: "20px",
  },
  button: {
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: "Poor Story",
    padding: "1px 4px",
  },
}));

export default function Video(props) {
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.grid1}
      >
        <p>{props.title}</p>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.grid2}
      >
        <p>Step 1. 부모교육 회기 내용에 관련된 영상을 시청해주세요</p>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.grid2}
      >
        <ReactPlayer url={props.url} controls={true} />
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.grid3}
      >
        <p>Step 2. 전달받은 Zoom 링크를 통해 접속해주세요</p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.grid2}
      >
        <p>
          Step 3. 부모-아동 상호작용 영상을 5분 분량응로 촬영하여 업로드해주세요
        </p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.dragdrop}
      >
        <VideoDragDrop uploadCallBack={handleVideoUpload} />
      </Grid>
    </Grid>
  );
}
