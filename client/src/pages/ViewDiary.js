import React, { useEffect, useState, useContext } from "react";
import { Grid, Card, Step, Button } from "@material-ui/core";
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
import { UPDATE_DIARY, GET_USER_DIARY } from "../Mutations";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0px",
  },

  time: {
    padding: "20px 0px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#e57f16",
  },
  answer: {
    margin: "10px 110px",
    marginBottom: "30px",
    fontSize: "18px",
    fontWeight: "normal",
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
  answer2: { margin: "10px 110px", fontSize: "18px" },

  comment: {
    margin: "15px 130px",
    fontSize: "18px",
    fontWeight: "normal",
    height: "20vh",
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

export default function Diary(props) {
  const location = useLocation();
  const [currentDay, setCurrentDay] = useState("monday");
  const [day, setDay] = useState(1);
  const [program, setProgram] = useState("program1");
  const [selected, setSelected] = useState("happy");
  const [activity, setActivity] = useState("");
  const [comment, setComment] = useState("");
  const [loadedData, setLoadedData] = useState(null);

  const [onUpdateDiary, { data, loading, error }] = useMutation(UPDATE_DIARY);

  console.log(location);

  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(GET_USER_DIARY, {
    variables: { userId: location.state.user },
  });

  if (loading2) {
    console.log("loading");
  } else {
    console.log("GET_USER_DIARY", data2);
    console.log(currentDay);
    console.log(data2.getChildDiaries.activity[program][currentDay]);
  }

  const onSave = () => {
    onUpdateDiary({
      variables: {
        userId: location.state.user,
        program: program,
        day: currentDay,
        activity: activity,
        selected: selected,
        comment: comment,
      },
    });
  };

  const setValues = () => {
    console.log("setvalues");
    setActivity(loadedData.activity[program][currentDay]);
    setComment(loadedData.comment[program][currentDay]);
    setSelected(loadedData.selected[program][currentDay]);
  };

  /*const calcDate = (inDate) => {
    const month = inDate.getMonth() + 1;
    const date = inDate.getDate();
    const day = calcDay(inDate.getDay());

    return month + "월 " + date + "일 " + day;
  };*/

  /* const calcDay = (inDay) => {
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
  };*/

  const onLeft = () => {
    if (day > 1) {
      setDay(day - 1);
      calcDay(day - 1);
    }
  };

  const onRight = () => {
    if (day < 7) {
      setDay(day + 1);
      calcDay(day + 1);
    }
  };

  const classes = useStyles();

  const [step, setStep] = useState(props.step);

  const handleChange = (event) => {
    setSelected(event.currentTarget.id);
  };
  const handleChange1 = (event) => {
    setActivity(event.currentTarget.value);
  };
  const handleChange2 = (event) => {
    setComment(event.currentTarget.value);
  };

  const calcDay = (day) => {
    switch (day) {
      case 1:
        setCurrentDay("monday");
        break;
      case 2:
        setCurrentDay("tuesday");
        break;
      case 3:
        setCurrentDay("wednesday");
        break;
      case 4:
        setCurrentDay("thursday");
        break;
      case 5:
        setCurrentDay("friday");
        break;
      case 6:
        setCurrentDay("saturday");
        break;
      case 7:
        setCurrentDay("sunday");
        break;
    }
  };

  useEffect(() => {
    if (!error2 && !loading2) {
      setLoadedData(data2.getChildDiaries);
    }
    if (loadedData) {
      console.log("loaded", loadedData, currentDay, program);
      setValues();
    }
    if (data) {
      console.log(data);
      setLoadedData(data.createChildDiary);
    }
    console.log(program, day, currentDay);
    console.log(activity, comment, selected);
    console.log(props.step);
  }, [props.step, day, data2, error2, loading2, loadedData, data]);

  const onSubmit = () => {};

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
          <IconButton
            disabled={currentDay === 1 ? true : false}
            onClick={onLeft}
          >
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={10}
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
              className={classes.time}
            >
              <p> Day {day}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              xs={12}
              className={classes.answer}
            >
              <span style={{ marginRight: "30px" }}>활동:</span>
              <TextField
                style={{ width: "80%" }}
                placeholder="아이와 함께한 활동을 적어주세요."
                id="primaryLanguage"
                autoComplete="off"
                onChange={handleChange1}
                value={activity}
                inputProps={{ style: { fontSize: "18px" } }}
                //needs change
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
              <span style={{ marginRight: "30px" }}>기분:</span>
              <MuiThemeProvider theme={theme1}>
                <IconButton
                  //needs change
                  color={selected === "happy" ? "secondary" : ""}
                  id="happy"
                  onClick={handleChange}
                >
                  <SentimentVerySatisfiedIcon style={{ fontSize: "30px" }} />
                </IconButton>
                <MuiThemeProvider theme={theme2}>
                  <IconButton
                    color={selected === "normal" ? "secondary" : ""}
                    id="normal"
                    onClick={handleChange}
                  >
                    <SentimentSatisfiedIcon style={{ fontSize: "30px" }} />
                  </IconButton>
                  <MuiThemeProvider theme={theme3}>
                    <IconButton
                      color={selected === "unhappy" ? "secondary" : ""}
                      id="unhappy"
                      onClick={handleChange}
                    >
                      <SentimentVeryDissatisfiedIcon
                        style={{ fontSize: "30px" }}
                      />
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
              className={classes.answer2}
            >
              <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                코멘트:
              </div>
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
                variant="outlined"
                style={{ width: "100%", height: "100%" }}
                onChange={handleChange2}
                value={comment}
                InputProps={{ style: { fontSize: "18px", height: "100%" } }}
                InputLabelProps={{ style: { fontSize: "18px" } }}
                //needs change
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={1}
        >
          <IconButton
            disabled={currentDay === 7 ? true : false}
            onClick={onRight}
          >
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

const btnStyle = {
  padding: "20px 50px",
  width: "auto",
  height: "auto",
  border: "none",
  fontSize: "18px",
  color: "#e57f16",
  fontWeight: "500",
  marginBottom: "2vh",
  marginTop: "3vh",
  border: "1px solid #e57f16",
};
