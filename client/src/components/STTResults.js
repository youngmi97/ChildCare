import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
  testGrid: {
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#888888",
    height: "300px",
  },

  textCardGridImage: {
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#888888",
    height: "60px",
  },
  textCardGridText: {
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#888888",
    padding: "10px",
    height: "60px",
  },

  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    border: "solid",
    borderWidth: "0.2px",
    borderColor: "#888888",
    padding: "10px",
    paddingLeft: "30px",
  },

  testingCard: {
    width: "100%",
    height: "60px",
    margin: "10px",
  },
}));

function STTResults() {
  const classes = useStyles();

  const SpeechCard = (
    <Card className={classes.testingCard}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          className={classes.textCardGridImage}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={3}
        >
          Image
        </Grid>
        <Grid
          className={classes.textCardGridText}
          container
          direction="column"
          alignItems="left"
          xs={9}
        >
          Text
        </Grid>
      </Grid>
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
      <Grid className={classes.testTitle} container direction="row" xs={12}>
        최종 STT 결과물 표출
      </Grid>
      <Grid
        className={classes.testGrid}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        xs={8}
      >
        <Card
          style={{
            height: "100%",
            width: "100%",
            overflowY: "scroll",
          }}
        >
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
          {SpeechCard}
        </Card>
      </Grid>
      <Grid
        className={classes.testGrid}
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={4}
      >
        HereHere
      </Grid>
    </Grid>
  );
}

export default STTResults;
