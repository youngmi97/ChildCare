import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import VideoDragDrop from "../VideoDragDrop2"

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "110px",
    marginRight: "110px",
    marginBottom: "30px",
    fontSize: "13px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
  qna: {
    padding: "15px 0px",
  },
  question: {
    margin: "20px 90px",
    fontSize: "18px",
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
  dragdrop: {
    padding: "20px",
    marginBottom: "50px",
  },
}));

export default function Video(props){

  const classes = useStyles();
  const [videoFiles, setVideoFiles] = useState([]);
  const [uploaded, setUploaded] = useState(false); 


  // On file select (from the pop up)
  function handleVideoUpload(videoData) {
    props.parentUploadTrigger(videoData);
    setUploaded(true);
  }


  // File content to be displayed after
  // file upload is complete
  useEffect(() => {
    setVideoFiles(props.videos);
  },[props.videos]);

  
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.title}
        >
          <p>상호작용</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.subtitle}
        >
          <p>아동과 5분간 상호작용 영상을 촬영하여 업로드 해주세요. (소꿉놀이, 의사놀이, 블록놀이 등의 장난감을 활용한 영상)</p>
          <p>성인과 아동의 1:1 영상으로, 두 사람이 화면에 모두 나오게 촬영해 주세요. 하단의 샘플 영상을 참고해 주세요. </p>
        </Grid>

        <Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>샘플 영상</p>
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
              justify="flex-start"
              alignItems="center"
              xs={12}
            >
              <ReactPlayer url="./서하책일기.mp4" width="70%" controls={true}/>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container className={classes.qna}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>
              영상을 업로드하세요.
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
              justify="flex-start"
              alignItems="center"
              xs={12}
            >
              <VideoDragDrop uploadCallBack={handleVideoUpload} /> 
              {videoFiles[0] ? (
              <ReactPlayer url={videoFiles[0].preview} controls={true}/>) :
                (<ReactPlayer url={"asd"} controls={true}/>)
              }
              
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <button style={btnStyle1} onClick={props.onBack}>
            이전 단계로 이동
          </button>
          <button style={btnStyle} onClick={props.onContinue}>
            다음 단계로 이동
          </button>
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
