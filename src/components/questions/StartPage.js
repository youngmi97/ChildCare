import React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "70px",
  },
  button: {
    margin: "20px 0px",
  },
  title: {
    fontFamily: "'Noto Sans KR', sans serif;",
    fontSize: "25px",
    fontWeight: "600",
    padding: "5px 0px",
    margin: "0px",
  },
  subtitle: {
    fontFamily: "'Noto Sans KR', sans serif;",
    fontSize: "16px",
    fontWeight: "600",
    padding: "0px 5px ",
    marginTop: "0px",
    marginBottom: "20px",
  },
  text: {
    fontFamily: "'Noto Sans KR', sans serif;",
    fontSize: "16px",
    fontWeight: "600",
    color: "#626567",
    padding: "5px ",
  },
  image: {
    padding: "0px 70px",
    marginBottom: "30px",
  },
}));

export default function StartPage(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
      className={classes.root}
    >
      <Card
        style={{
          borderRadius: "0px",
          borderTop: "6px solid #FFB800",
          paddingTop: "70px",
          width: "90%",
          height: "100%",
        }}
      >
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
            md={6}
            className={classes.image}
          >
            <img src="/mainIllust.png" width="70%" height="70%" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            xs={10}
            md={4}
          >
            <p className={classes.title}>아동 언어발달 평가</p>
            <p className={classes.subtitle}>Language Assesment</p>
            <p className={classes.text}>
              아동의 언어발달 수준이 궁금하거나 언어 발달 지연이 의심되는 경우,
              온라인 언어발달 평가를 통해 가정에서 전문가의 언어치료 서비스를
              받을 수 있습니다.
            </p>
            <p className={classes.text}>
              아동의 언어 발달 수준, 사용하는 언어 종류에 관계 없이 온라인
              평가가 가능합니다.
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.button}
        >
          <button style={btnStyle} onClick={props.onStart}>
            평가 시작
          </button>
        </Grid>
      </Card>
    </Grid>
  );
}

const btnStyle = {
  margin: "50px",
  backgroundColor: "#FFEBB8",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#FFB800",
  fontWeight: "600",
};
