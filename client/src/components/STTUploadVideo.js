import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core";
import VideoDragDrop from "./VideoDragDrop";
import "../index.css";
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
    backgroundColor: "#ff8c00",
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testGrid: {
    height: "150px",
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
        <Grid
          container
          direction="column"
          justify="left"
          alignItems="center"
          xs={12}
        >
          <h5>부모 - 아동 상호작용 영상 촬영 지시사항</h5>
          <div textAlign="left">
            <ul>
              - 화면안에 부모님과 아동, 그리고 놀이 상황이 모두 보이도록
              촬영해주세요
            </ul>
            <ul>
              - 부모님과 아동의 목소리가 잘 녹음될수 있도록 멀지 않은 거리에서
              촬영해주세요
            </ul>
            <ul>- 영상은 반드시 5분 이상 길이로 촬영해주세요</ul>
            <ul>
              - 아이가 화면 밖을 벗어나지 않도록 되도록 착석하여 놀이할 수 있는
              상황을 만들어주세요
            </ul>
          </div>
        </Grid>
      </Card>
    </Grid>
  );
}

export default STTUplaodVideo;
