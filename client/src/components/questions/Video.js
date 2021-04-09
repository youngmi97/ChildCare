import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Modal from "./Modal.js";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import VideoDragDrop from "../VideoDragDrop2";
import { AuthContext } from "../../context/auth";
var AWS = require("aws-sdk");

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
    marginTop: "20px",
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
    marginLeft: "100px",
  },
}));

export default function Video(props) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [videoFiles, setVideoFiles] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  async function callSttPromise(newName) {
    await new Promise((resolve, reject) => {
      console.log("S3 Upload Promise");
      const bucketName = "mp4in";
      const uploadFileName = newName + ".mp4";
      // const fileName = newName + ".mp4";

      const payload = {
        Key: uploadFileName,
        Bucket: bucketName,
        Body: uploadedFile[0],
        ContentType: "video/mp4",
        ACL: "public-read",
      };

      // for client env variables, have to add REACT_APP infront
      var s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: "us-east-1",
      });

      console.log("S3 Upload Promise1");

      s3.upload(payload, (err, data) => {
        if (err) {
          console.log("err", err);
          reject(err);
        } else {
          console.log("data", data);
          // while data is null, the mp4 is still uploading
          // when data returns, mp4 url is in data.Location e.g.) https://mp4in.s3.amazonaws.com/firstprof_202121_form.mp4
          resolve(data.Location);
        }
      });
    });
  }

  // On file select (from the pop up)
  function handleVideoUpload(videoData) {
    props.parentUploadTrigger(videoData);
    setUploadedFile(videoData);

    setUploaded(true);
  }

  // File content to be displayed after
  // file upload is complete
  useEffect(() => {
    setVideoFiles(props.videos);

    if (uploadedFile.length != 0) {
      const api =
        "https://85sgmxl2m9.execute-api.us-east-1.amazonaws.com/staging2";

      var today = new Date();
      var date =
        today.getFullYear().toString() +
        (today.getMonth() + 1).toString() +
        today.getDate().toString();

      let newName = user.username + "_" + date + "_" + "form";

      callSttPromise(newName);

      const data = { body: { name: newName } };

      axios
        .post(api, data)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [props.videos, uploadedFile]);

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
        <div>
          아동과 5분간 상호작용 영상을 촬영하여 업로드 해주세요. (소꿉놀이,
          의사놀이, 블록놀이 등의 장난감을 활용한 영상) <br />
          성인과 아동의 1:1 영상으로, 두 사람이 화면에 모두 나오게 촬영해
          주세요. 하단의 샘플 영상을 참고해 주세요.{" "}
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
          <p>샘플 영상</p>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.answer}
        >
          <div>
            <ReactPlayer
              url="./서하책일기.mp4"
              width="84vw"
              height="60vh"
              controls={true}
            />
          </div>
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
