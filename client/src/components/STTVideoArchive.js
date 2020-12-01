import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
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
    fontSize: "16px",
    backgroundColor: "#FFB800",
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testTitle2: {
    fontSize: "16px",
    color: "#FFB800",
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

  videoHolder: {
    height: "100%",
  },

  videoHolder2: {
    height: "100%",
    overflowY: "scroll",
  },

  testingCard: {
    width: "80%",
    height: "80px",
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
  videoCard: {
    width: "150px",
    height: "150px",
    padding: "10px",
    margin: "10px",
  },
}));

function STTVideoArchive(props) {
  const classes = useStyles();

  const videoCard = (
    <Card className={classes.videoCard}>
      <CardActionArea>
        <CardMedia
          style={{ width: "128px", height: "72px" }}
          component="img"
          alt="Family"
          height="140"
          image="/thumbnailExample.png"
          title="Family"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="h5"
            style={{ height: "30px" }}
          >
            VideoTitle
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

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
          유저 영상 목록
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            className={classes.videoHolder2}
            container
            direction="row"
            alignItems="start"
            xs={6}
          >
            <Grid className={classes.testTitle2} container xs={12}>
              평가 영상
            </Grid>
            <Grid
              className={classes.videoHolder}
              container
              alignItems="start"
              xs={12}
            >
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
            </Grid>
          </Grid>
          <Grid
            className={classes.videoHolder2}
            container
            direction="row"
            alignItems="start"
            xs={6}
          >
            <Grid className={classes.testTitle2} container xs={12}>
              프로그램 영상
            </Grid>
            <Grid
              className={classes.videoHolder}
              container
              alignItems="start"
              xs={12}
            >
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
              {videoCard}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default STTVideoArchive;
