import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

export default function ButtonBar(props) {
  const useStyles = makeStyles((theme) => ({
    bar: {
      marginBottom: "15px",
    },
    button: {
      fontSize: "14px",
      fontWeight: "normal",
      fontFamily: "'Noto Sans KR', sans serif;",
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
        style={
          props.step === "1" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("1")}
      >
        1회차
      </Button>
      <Button
        value="2"
        style={
          props.step === "2" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("2")}
      >
        2회차
      </Button>
      <Button
        value="3"
        style={
          props.step === "3" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("3")}
      >
        3회차
      </Button>
      <Button
        value="4"
        style={
          props.step === "4" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("4")}
      >
        4회차
      </Button>
      <Button
        value="5"
        style={
          props.step === "5" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("5")}
      >
        5회차
      </Button>
      <Button
        value="6"
        style={
          props.step === "6" ? { color: "#FFB800", fontWeight: "600" } : {}
        }
        className={classes.button}
        onClick={(e) => props.onChange("6")}
      >
        6회차
      </Button>
    </Grid>
  );
}
