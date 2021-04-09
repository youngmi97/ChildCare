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
import LecturesStartPage from "./LecturesStartPage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0px",
  },

  button: {
    fontSize: "30px",
    fontWeight: "600",
  },

  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
  step: {
    height: "65px",
    borderTop: "7.5px solid #FFB800",
  },
  qna: {
    marginBottom: "70px",
  },
  question: {
    margin: "20px 120px",
    fontSize: "18px",
    fontWeight: "normal",
  },
  answer: {
    width: "100vw",
    fontSize: "15px",
    fontWeight: "normal",
    marginBottom: "7vh",

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
  const [start, setStart] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const { user } = useContext(AuthContext);
  const [lectureDiary, setLectureDiary] = useState("lecture");

  const onStart = () => {
    setStart(1);
  };

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
        <Grid>
          <Grid
            container
            direction="row"
            justify="flex-tart"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>
              <span style={{ fontWeight: "600", color: "#e57f16" }}>
                Step 3.
              </span>{" "}
              부모-아동 상호작용 영상을 5분 분량으로 촬영하여 업로드해주세요
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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <div style={{ marginLeft: "7vw", width: "90vw" }}>
                <VideoDragDrop uploadCallBack={handleVideoUpload} />
              </div>
              {videoFiles[0] ? (
                <ReactPlayer
                  url={videoFiles[0].preview}
                  controls={true}
                  width="84vw"
                  height="60vh"
                />
              ) : (
                <ReactPlayer
                  url={"asd"}
                  controls={true}
                  width="84vw"
                  height="60vh"
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    ) : (
      <Diary step={step} />
    );
  };
  switch (start) {
    case 0: {
      return <LecturesStartPage onStart={onStart} />;
    }
    default: {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflowY: "scroll",
            padding: "0",
            scrollbarWidth: "none",
          }}
        >
          <div
            style={{
              backgroundImage: "url(/Lectures.jpg)",
              backgroundSize: "100vw 100vh",
              width: "100vw",
              height: "93vh",
              marginTop: "7vh",
            }}
          >
            <div
              style={{
                marginLeft: "7vw",
                paddingTop: "10vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "2vw",
                  fontWeight: "400",
                  color: "#e57f16",
                  marginBottom: "3vh",
                }}
              >
                online
              </div>
              <div
                style={{
                  fontSize: "4vw",
                  color: "#717071",
                  lineHeight: "8vh",
                  fontWeight: "300",
                  marginBottom: "4vh",
                }}
              >
                PARENT
                <br />
                PROFESSIONAL
                <br />
                EDUCATION
              </div>
              <div>
                <hr
                  style={{
                    width: "3vw",
                    border: "none",
                    borderTop: "0.6vh solid #e57f16",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.5vw",
                  color: "#717071",
                  lineHeight: "4vh",
                  fontWeight: "300",
                  marginTop: "4vh",
                }}
              >
                Providing parental education <br />
                services for the purpose <br />
                of enhancing online interaction
              </div>
            </div>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            className={classes.root}
          >
            <div>
              <Button
                style={
                  lectureDiary === "lecture"
                    ? {
                        fontSize: "22px",
                        fontWeight: "400",
                        borderRadius: "0",
                        padding: "0px 20px",
                        color: "#e57f16",
                      }
                    : {
                        fontSize: "22px",
                        fontWeight: "400",
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
            </div>
            <div
              style={{ fontSize: "22px", fontWeight: "400", margin: "0px 1vw" }}
            >
              |
            </div>
            <div>
              <Button
                style={
                  lectureDiary === "diary"
                    ? {
                        fontSize: "22px",
                        fontWeight: "400",
                        borderRadius: "0",
                        padding: "0px 20px",
                        color: "#e57f16",
                      }
                    : {
                        fontSize: "22px",
                        fontWeight: "400",
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
            </div>

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
          </Grid>
        </div>
      );
    }
  }
}
