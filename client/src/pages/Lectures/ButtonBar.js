import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

export default function ButtonBar(props) {
  const useStyles = makeStyles((theme) => ({
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

  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      xs={12}
      className={classes.bar}
    >
      <Button
        value="1"
        disabled={props.step === "1" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("1")}
      >
        1회차
      </Button>
      <Button
        value="2"
        disabled={props.step === "2" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("2")}
      >
        2회차
      </Button>
      <Button
        value="3"
        disabled={props.step === "3" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("3")}
      >
        3회차
      </Button>
      <Button
        value="4"
        disabled={props.step === "4" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("4")}
      >
        4회차
      </Button>
      <Button
        value="5"
        disabled={props.step === "5" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("5")}
      >
        5회차
      </Button>
      <Button
        value="6"
        disabled={props.step === "6" ? true : false}
        className={classes.button}
        onClick={(e) => props.onChange("6")}
      >
        6회차
      </Button>
    </Grid>
  );
}
