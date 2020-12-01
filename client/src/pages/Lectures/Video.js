import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "110px",
    marginRight: "110px",
    marginBottom: "10px",
    fontSize: "13px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
  qna: {
    padding: "15px 0px",
  },
  question: {
    margin: "20px 90px",
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },

  button: {
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: "Poor Story",
    padding: "1px 4px",
  },
  answer: {
    margin: "0px 110px",
    fontSize: "15px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
    "& label.Mui-focused": {
      color: "#FFB800",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFB800",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFB800",
      },
    },
    "& .Mui-checked": {
      color: "#FFB800",
    },
  },
}));

export default function Video(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        className={classes.title}
      >
        <p>{props.title}</p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        className={classes.subtitle}
      >
        <p>해당 교육에 대한 설명</p>
      </Grid>
      <Grid container className={classes.qna}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <p>Step 1. 부모교육 회기 내용에 관련된 영상을 시청해주세요</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.answer}
        >
          <ReactPlayer url={props.url} controls={true} />
        </Grid>
      </Grid>
      <Grid container className={classes.qna}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <p>Step 2. 전달받은 Zoom 링크를 통해 접속해주세요</p>
        </Grid>
      </Grid>
    </div>
  );
}

/*<Grid container direction="row" justify="center" alignItems="center" xs={12}>
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
</Grid>;
*/
