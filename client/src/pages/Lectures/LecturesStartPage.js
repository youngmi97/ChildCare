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

export default function LecturesStartPage(props) {
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
            <p className={classes.title}>부모교육 . 전문가교육</p>
            <p className={classes.subtitle}>Parent Professional Education</p>
            <p className={classes.text}>
              상호작용 증진을 통하여 아동의 언어 발달을 촉진하기 위한 부모교육
              및 전문가 교육을 실시합니다.
            </p>
            <p className={classes.text}>
              임상 및 연구를 통해 검증된 상호작용 증진 부모 및 전문가 프로그램
              서비스를 온라인으로 제공합니다.
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
