import React, { useEffect, useState } from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0px",
  },

  time: {
    padding: "20px 0px",
    fontFamily: "'Noto Sans KR' , sans serif;",
    fontSize: "22px",
    fontWeight: "600",
  },
  answer: {
    margin: "10px 110px",
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
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFB800",
      },
    },
    "& .Mui-checked": {
      color: "#FFB800",
    },
  },
  comment: {
    margin: "15px 130px",
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
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFB800",
      },
    },
  },
}));

const theme1 = createMuiTheme({
  palette: {
    secondary: {
      main: "#FF9FCD",
    },
  },
});
const theme2 = createMuiTheme({
  palette: {
    secondary: {
      main: "#FFC531",
    },
  },
});
const theme3 = createMuiTheme({
  palette: {
    secondary: {
      main: "#91CAFF",
    },
  },
});

export default function Diary() {
<<<<<<< HEAD
  const [currentDate, setCurrentDate] = useState(new Date());
=======
  //tied to userId

  var [date, setDate] = useState(new Date());
  const classes = useStyles();

  const [selected, setSelected] = useState("happy");
  const [activity, setActivity] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setSelected(event.currentTarget.id);
  };
  const handleChange1 = (event) => {
    setActivity(event.currentTarget.value);
  };
  const handleChange2 = (event) => {
    setComment(event.currentTarget.value);
  };

  useEffect(() => {
    console.log(selected);
    console.log(activity);
    console.log(comment);
  }, [selected, activity, comment]);
>>>>>>> 27ff58912e8cdb6404089908c656874ac76bb86b

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

  const onLeft = () => {
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(calcDate(currentDate));
  };

  const onRight = () => {
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(calcDate(currentDate));
  };

  const [date, setDate] = useState(calcDate(currentDate));
  const classes = useStyles();

  const [selected, setSelected] = useState("happy");
  const [activity, setActivity] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setSelected(event.currentTarget.id);
  };
  const handleChange1 = (event) => {
    setActivity(event.currentTarget.value);
  };
  const handleChange2 = (event) => {
    setComment(event.currentTarget.value);
  };

  useEffect(() => {
    console.log(selected);
    console.log(activity);
    console.log(comment);
    console.log(date);
  }, [selected, activity, comment, date]);

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.root}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={1}
        >
          <IconButton>
            <NavigateBeforeIcon fontSize="large" onClick={onLeft} />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={10}
        >
          <Card style={{ width: "90%", height: "100%" }}>
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
                <p> {date}</p>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.answer}
              >
                <span style={{ marginRight: "20px" }}>활동:</span>
                <TextField
                  style={{ width: "50%" }}
                  placeholder="아이와 함께한 활동을 적어주세요."
                  id="primaryLanguage"
                  autoComplete="off"
                  onChange={handleChange1}
                  value={activity}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.answer}
              >
                <span style={{ marginRight: "20px" }}>기분:</span>
                <MuiThemeProvider theme={theme1}>
                  <IconButton
                    color={selected === "happy" ? "secondary" : ""}
                    id="happy"
                    onClick={handleChange}
                  >
                    <SentimentVerySatisfiedIcon />
                  </IconButton>
                  <MuiThemeProvider theme={theme2}>
                    <IconButton
                      color={selected === "normal" ? "secondary" : ""}
                      id="normal"
                      onClick={handleChange}
                    >
                      <SentimentSatisfiedIcon />
                    </IconButton>
                    <MuiThemeProvider theme={theme3}>
                      <IconButton
                        color={selected === "unhappy" ? "secondary" : ""}
                        id="unhappy"
                        onClick={handleChange}
                      >
                        <SentimentVeryDissatisfiedIcon />
                      </IconButton>
                    </MuiThemeProvider>
                  </MuiThemeProvider>
                </MuiThemeProvider>
                <span style={{ marginLeft: "20px" }}>{selected}</span>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.answer}
              >
                <p style={{ marginRight: "20px" }}>코멘트:</p>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
                className={classes.comment}
              >
                <TextField
                  id="comments"
                  label="아이와 함께 보낸 시간에 대해 작성해주세요."
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleChange2}
                  value={comment}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                className={classes.buttons}
              >
                <button style={btnStyle}>저장하기</button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={1}
        >
          <IconButton>
            <NavigateNextIcon fontSize="large" onClick={onRight} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
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

const btnStyle1 = {
  margin: "50px",
  backgroundColor: "#E4E4E4",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#626567",
  fontWeight: "600",
};
