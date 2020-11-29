import React, { useEffect, useState } from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  time: {
    padding: "20px 0px",
    fontFamily: "'Noto Sans KR' , sans serif;",
    fontSize: "22px",
    fontWeight: "600",
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

export default function Diary() {
  var [date, setDate] = useState(new Date());
  const classes = useStyles();

  const calcDate = (inDate) => {
    const month = inDate.getMonth() + 1;
    const date = inDate.getDate();
    const day = calcDay(inDate.getDay());

    return month + "월 " + date + "일 " + day;
  };
  const calcDay = (inDay) => {
    return inDay === 0
      ? "일요일"
      : inDay === 1
      ? "월요일"
      : inDay === 2
      ? "화요일"
      : inDay === 3
      ? "수요일"
      : inDay === 4
      ? "목요일"
      : inDay === 5
      ? "금요일"
      : "토요일";
  };
  console.log(calcDate(date));

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 10000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Card style={{ width: "80%", height: "100%" }}>
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
              className={classes.time}
            >
              <p> {calcDate(date)}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              className={classes.answer}
            >
              <TextField
                style={{ width: "80%" }}
                placeholder="아이와 함께한 활동을 적어주세요."
                id="primaryLanguage"
                autoComplete="off"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
