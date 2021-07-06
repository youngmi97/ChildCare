import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import VideoDragDrop from "../VideoDragDrop2";
import Audio from "./AudioFiles/Audio.js";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "120px",
    marginRight: "120px",
    fontSize: "25px",
    color: "#e57f16",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "120px",
    marginRight: "120px",
    marginBottom: "30px",
    fontSize: "16px",
    fontWeight: "normal",
  },
  qna: {
    padding: "10px 0px",
    width: "90vw",
  },
  question: {
    marginLeft: "120px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "normal",
  },
  answer: {
    width: "100vw",
    fontSize: "15px",
    fontWeight: "normal",

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

export default function SR(props) {
  const url = {
    url0: "/SR/instruction_SR.m4a",
    url1: "/SR/0(연습1)아기가 울어요.mp3",
    url2: "/SR/0(연습2)머리를 빗어요.mp3",
    url3: "/SR/1.그림을 연필로 그려요.mp3",
    url4: "/SR/2.동생이 그림책을 봐요.mp3",
    url5: "/SR/3.엄마가 치마를 입어요.mp3",
    url6: "/SR/4.엄마가 청소를 하고 걸레를 빨아요.mp3",
    url7: "/SR/5.아빠가 힘들어서 하품을 크게 해요.mp3",
    url8: "/SR/6.동생이 추우면 엄마가 이불을 줘요.mp3",
    url9: "/SR/7.동생이 작은 칫솔로 이빨을 닦아요.mp3",
    url10: "/SR/8.아빠가 동생한테 맛있는 빵을 줘요.mp3",
    url11: "/SR/9.친구가 밖에서 그네를 재밌게 타요.mp3",
    url12: "/SR/10.아빠가 청소를 하는 엄마를 불러요.mp3",
    url13: "/SR/11.동생은 주사를 맞는 것을 싫어해요.mp3",
    url14: "/SR/12.아빠가 창문을 세게 닫으라고 해요.mp3",
  };

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
  }, [props.videos]);

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
        <p>문장 따라말하기</p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
        className={classes.subtitle}
      >
        <div>
          검사의 지시사항을 먼저 들려주시고, 이후 음성 파일들을 연습문항부터
          아동에게 차례로 들려주시면서 따라 말하게 해주세요. <br />
          문항의 처음부터 끝까지 하나의 영상으로 촬영해서 업로드해주시면 됩니다.
          화면 안에 아동의 얼굴(특히 입)이 전부 보이도록 정면에서 촬영해주세요.
          <br />
          또한 아동의 목소리가 잘 녹음될 수 있도록 촬영해주세요. 모든 문항은
          아동에게 “한 번만” 들려주고 바로 따라 말하게 해야 정확하게 평가됩니다.
          <br /> 아동이 틀리거나 잘 따라 말하지 못해도 그대로 녹화해서
          업로드해주세요.
        </div>
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
          <p>지시사항</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <Audio url={url.url0} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <p>연습문제</p>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <Audio url={url.url1} />
          <Audio url={url.url2} />
        </Grid>
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
          <p>실전문제</p>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <Audio url={url.url3} />
          <Audio url={url.url4} />
          <Audio url={url.url5} />
          <Audio url={url.url6} />
          <Audio url={url.url7} />
          <Audio url={url.url8} />
          <Audio url={url.url9} />
          <Audio url={url.url10} />
          <Audio url={url.url11} />
          <Audio url={url.url12} />
          <Audio url={url.url13} />
          <Audio url={url.url14} />
        </Grid>
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
          <p>영상을 업로드하세요.</p>
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
              <ReactPlayer controls={true} width="84vw" height="60vh" />
            )}
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button style={btnStyle1} onClick={props.onBack}>
          <span style={{ marginRight: "1vw", marginBottom: "1px" }}>{"<"}</span>
          이전 단계로 이동
        </Button>
        <Button style={btnStyle} onClick={props.onContinue}>
          다음 단계로 이동{" "}
          <span style={{ marginLeft: "1vw", marginBottom: "1px" }}>{">"}</span>
        </Button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "20px 50px",
  width: "auto",
  height: "auto",
  border: "none",
  fontSize: "16px",
  color: "#e57f16",
  fontWeight: "500",
  marginBottom: "4vh",
  marginTop: "3vh",
};

const btnStyle1 = {
  padding: "20px 50px",
  width: "auto",
  height: "auto",
  border: "none",
  fontSize: "16px",
  color: "#e57f16",
  fontWeight: "500",
  marginBottom: "4vh",
  marginTop: "3vh",
};
