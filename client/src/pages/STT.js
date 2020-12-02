import React, { useContext, useState, useEffect } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import STTResults from "../components/STTResults";
import STTUploadVideo from "../components/STTUploadVideo";
import STTVideoArchive from "../components/STTVideoArchive";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";

//AWS necessities
const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});
var AWS = require("aws-sdk");

const axios = require("axios");

function STT() {
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);

  const [childTimeLabel, setChildTimeLabel] = useState([]);
  const [parentTimeLabel, setParentTimeLabel] = useState([]);

  async function callSttPromise(newName) {
    await new Promise((resolve, reject) => {
      console.log("S3 Upload Promise");
      const bucketName = "mp4in";
      const uploadFileName = newName + ".mp4";
      // const fileName = newName + ".mp4";

      const payload = {
        Key: uploadFileName,
        Bucket: bucketName,
        Body: videoFiles[0],
        ContentType: "video/mp4",
      };

      // console.log("Credential check", process.env.AWS_ACCESS_KEY_ID);
      // console.log("Credential check", process.env.REACT_APP_AWS_ACCESS_KEY_ID);

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
          resolve(data.Location);
        }
      });
    });
  }

  function handleVideoUpload(videoData) {
    setVideoFiles(videoData);
  }

  function handleParentTimeLabel(timeFrag) {
    console.log("parent time", timeFrag);
    setParentTimeLabel(timeFrag);
  }

  function handleChildTimeLabel(timeFrag) {
    console.log("child time", timeFrag);
    setChildTimeLabel(timeFrag);
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log("videoFile data changed");
      // test api gateway REST call
      const api =
        "https://85sgmxl2m9.execute-api.us-east-1.amazonaws.com/staging2";

      var today = new Date();
      var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();

      //[id]_[date]_[type].mp4
      //type: "form" or "lesson"
      let newName = "userId_" + date + "_" + "form";

      const data = { body: { name: newName } };

      // Something wrong on the lambda side
      // parse body into JSON and utilize resource

      //callSttPromise(newName);

      // valid file name example: userId_20201202_form
      // TODO
      // 1. delete completed transcription job
      // 2. listen to json creation event and bring result to react
      // 3. parse json and display data

      axios
        .post(api, data)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [videoFiles]);

  // Check Successful Prop Pass via show/hide of STTResults Component

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      direction="row"
    >
      {/* <SpeechToText /> */}
      <STTUploadVideo parentUploadTrigger={handleVideoUpload} />
      <STTVideoArchive />
      <VideoLabeling
        videos={videoFiles}
        parentTimeLabeled={handleParentTimeLabel}
        childTimeLabeled={handleChildTimeLabel}
      />
      <STTResults parentLabel={parentTimeLabel} childLabel={childTimeLabel} />
    </Grid>
  );
}

export default STT;
