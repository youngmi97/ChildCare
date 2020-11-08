import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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
    borderWidth: "0.5px",
    borderColor: "#888888",
    height: "300px",
  },

  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    border: "solid",
    borderWidth: "0.5px",
    borderColor: "#888888",
    padding: "10px",
    paddingLeft: "30px",
  },
}));

function VideoLabeling() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <Grid className={classes.testTitle} container direction="row" xs={12}>
        Video Labeling Stage
      </Grid>
      <Grid
        className={classes.testGrid}
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={8}
      >
        HereHere
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

export default VideoLabeling;
