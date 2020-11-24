import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography, TextField } from "@material-ui/core";
import "../../index.css";

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "80%",
    height: "250px",
    border: "solid",
    borderWidth: 1,
    fontSize: "50px",
  },
  imageConfig: {
    width: "60%",
  },
  optionCard: {
    justify: "center",
    marginTop: "20px",
    marginLeft: "20px",
  },
  mainText: {
    height: "50px",
    width: "100%",
    fontSize: "60px",
    marginLeft: "20px",
  },

  textOnline: {
    height: "50px",
    width: "100%",
    fontSize: "30px",
    fontColor: "#dedede",
    marginLeft: "20px",
  },

  cardImg: {
    width: "30%",
    marginTop: "30px",
    float: "right",
  },

  firstHalf: {
    height: "500px",
    // border: "solid",
    // borderColor: "#dedede",
    // borderWidth: "1px",
  },

  secondHalf: {
    height: "300px",
  },
  secondCardRow: {
    height: "300px",
  },
}));

function HomeMain(props) {
  const classes = useStyles();

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
        className={classes.firstHalf}
        direction="row"
        justify="left"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="column"
          justify="left"
          alignItems="left"
          xs={4}
        >
          <div className={classes.textOnline}>Online</div>
          <div className={classes.mainText}>LANGUAGE</div>
          <div className={classes.mainText}>DEVELOPMENT</div>
          <div className={classes.mainText}>ASSESSMENT</div>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={8}
        >
          <img
            className={classes.imageConfig}
            src="/mock-illustration.jpg"
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.secondHalf}
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
          xs={6}
        >
          <Card justify="center" className={classes.speechCard}>
            <div className={classes.optionCard}>언어발달평가</div>
            <img className={classes.cardImg} src="/checklist.png"></img>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card justify="center" className={classes.speechCard}>
            <div className={classes.optionCard}>연구참여신청</div>
            <img className={classes.cardImg} src="/participation.png"></img>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.secondCardRow}
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
          xs={6}
        >
          <Card justify="center" className={classes.speechCard}>
            <div className={classes.optionCard}>부모교육</div>
            <img className={classes.cardImg} src="/family.png"></img>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card justify="center" className={classes.speechCard}>
            <div className={classes.optionCard}>전문가교육</div>
            <img className={classes.cardImg} src="/teacher.png"></img>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeMain;
