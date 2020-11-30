import React, { useState, useContext, useEffect } from "react";
import Video from "./Video";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import VideoDragDrop from "../../components/VideoDragDrop2";
import ButtonBar from "./ButtonBar";
import { AuthContext } from "../../context/auth";
import { Button } from "@material-ui/core";
import Diary from "./Diary";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0px",
  },

  topbar: {
    padding: "30px 0px",
    borderTop: "7.5px solid #FFB800",
  },

  button: {
    fontFamily: "'Noto Sans KR', sans-serif;",
    fontSize: "30px",
    fontWeight: "600",
  },

  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
  step: {
    fontFamily: "'Noto Sans KR', sans-serif;",
    height: "65px",
    borderTop: "7.5px solid #FFB800",
  },
  trapezoid: {
    backgroundColor: "#FFEBB8",
    height: "100%",
    width: "100%",
  },
  qna: {
    marginBottom: "70px",
  },
  question: {
    margin: "20px 90px",
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
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

export default function NewLectures() {
  const classes = useStyles();
  const [videoFiles, setVideoFiles] = useState([]);
  const [step, setStep] = useState("1");
  const [uploaded, setUploaded] = useState(false);
  const { user } = useContext(AuthContext);
  const [lectureDiary, setLectureDiary] = useState("lecture");

  const videoList = [
    "https://youtu.be/yDKPXHgImzc",
    "https://youtu.be/sVDT9rcdarM",
    "https://youtu.be/aBWGQKtD-uE",
    "https://youtu.be/ya80fqxoosQ",
    "https://youtu.be/tD9rV9fB8ew",
    "https://youtu.be/_Sn8yyogFjs",
    "https://youtu.be/-8mbQGdxC4U",
  ];

  const videoName = [
    "Your child's stage of communication",
    "Let your child lead",
    "Follow your child's lead",
    "Take turns to keep the interaction going",
    "Build interaction (SPARK)",
    "Add language",
    "Let's  play",
  ];
  function handleChange(newValue) {
    setStep(newValue);
  }

  function handleVideoUpload(videoData) {
    console.log("here now", videoData);
    setVideoFiles(videoData);
    setUploaded(true);
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log(videoFiles[0].preview);
    }
  }, [videoFiles]);

  const whatToRender = () => {
    return lectureDiary === "lecture" ? (
      <div>
        <Video
          step={step}
          title={'"' + videoName[step - 1] + '"'}
          url={videoList[step - 1]}
        />
        <Grid container className={classes.qna}>
          <Grid
            container
            direction="row"
            justify="flex-tart"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>
              Step 3. 부모-아동 상호작용 영상을 5분 분량응로 촬영하여
              업로드해주세요
            </p>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.answer}
          >
            <VideoDragDrop
              uploadCallBack={handleVideoUpload}
              className={classes.dragdrop}
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
            {videoFiles[0] ? (
              <ReactPlayer url={videoFiles[0].preview} controls={true} />
            ) : (
              <ReactPlayer url={"asd"} controls={true} />
            )}
          </Grid>
        </Grid>
      </div>
    ) : (
      <Diary />
    );
  };
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
        <Card style={{ width: "80%", height: "100%", borderRadius: "0px" }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.topbar}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <Button
                style={
                  lectureDiary === "lecture"
                    ? {
                        fontFamily: "'Noto Sans KR', sans-serif;",
                        fontSize: "22px",
                        fontWeight: "600",
                        borderRadius: "0",
                        padding: "0px 20px",
                        borderBottom: "5px solid #FFB800",
                      }
                    : {
                        fontFamily: "'Noto Sans KR', sans-serif;",
                        fontSize: "22px",
                        fontWeight: "600",
                        fontColor: "lightgray",
                        borderRadius: "0",
                        padding: "0px 20px",
                        borderBottom: "none",
                      }
                }
                className={classes.lectures}
                onClick={() => setLectureDiary("lecture")}
              >
                교육
              </Button>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={6}
            >
              <Button
                style={
                  lectureDiary === "diary"
                    ? {
                        fontFamily: "'Noto Sans KR', sans-serif;",
                        fontSize: "22px",
                        fontWeight: "600",
                        borderRadius: "0",
                        padding: "0px 20px",
                        borderBottom: "5px solid #FFB800",
                      }
                    : {
                        fontFamily: "'Noto Sans KR', sans-serif;",
                        fontSize: "22px",
                        fontWeight: "600",
                        borderRadius: "0",
                        padding: "0px 20px",
                        borderBottom: "none",
                      }
                }
                className={classes.lectures}
                onClick={() => setLectureDiary("diary")}
              >
                일기
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <ButtonBar step={step} onChange={handleChange} />
          </Grid>
          {whatToRender()}
        </Card>
      </Grid>
    </div>
  );
}
