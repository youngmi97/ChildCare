import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#e57f16",
    fontWeight: "600",
    fontSize: "22px",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "110px",
    marginRight: "110px",
    marginBottom: "10px",
    fontSize: "13px",
    fontWeight: "normal",
  },
  qna: {
    padding: "15px 0px",
  },
  question: {
    margin: "20px 120px",
    fontSize: "18px",
    fontWeight: "normal",
  },

  button: {
    fontSize: "18px",
    fontWeight: "normal",

    padding: "1px 4px",
  },
  answer: {
    width: "100vw",
    fontSize: "15px",
    fontWeight: "normal",

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
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.title}
      >
        <p>{props.title}</p>
      </Grid>

      <Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <p>
            <span style={{ fontWeight: "600", color: "#e57f16" }}>Step 1.</span>{" "}
            부모교육 회기 내용에 관련된 영상을 시청해주세요
          </p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.answer}
        >
          <ReactPlayer
            url={props.url}
            controls={true}
            width="84vw"
            height="80vh"
          />
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
          <p>
            <span style={{ fontWeight: "600", color: "#e57f16" }}>Step 2.</span>{" "}
            전달받은 Zoom 링크를 통해 접속해주세요
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
