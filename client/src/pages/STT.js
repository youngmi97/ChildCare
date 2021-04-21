import React, { useContext, useState, useEffect } from "react";
import SpeechToText from "../components/SpeechToText";
import VideoLabeling from "../components/VideoLabeling";
import STTResults from "../components/STTResults";
import STTUploadVideo from "../components/STTUploadVideo";
import STTVideoArchive from "../components/STTVideoArchive";
import { AuthContext } from "../context/auth";
import { Grid } from "@material-ui/core";

//AWS necessities

var AWS = require("aws-sdk");

const axios = require("axios");

function STT() {
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);
  const [vidUrl, setVidUrl] = useState("");
  const [sttObject, setSttObject] = useState({});

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
        ACL: "public-read",
      };

      // for client env variables, have to add REACT_APP infront
      var s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
          setVidUrl(data.Location);
          resolve(data.Location);

          // What happens when I call the getObject method before the .json is created?

          // var getParams = {
          //   Bucket: "sttresultjson",
          //   Key: newName + ".json",
          // };

          // s3.getObject(getParams, function (err, data) {
          //   console.log("getObject called");
          //   if (err) return err;

          //   let objectData = data.Body.toString("utf-8"); // Use the encoding necessary
          //   console.log("objectData", objectData);
          // });
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

  function handleSetVidUrl(url) {
    setVidUrl(url);

    //parse the url and get stt .json

    var s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: "us-east-1",
    });

    const parsedUrl = url.split(".")[3].split("/")[1];

    console.log("parsedUrl", parsedUrl);

    var getParams = {
      Bucket: "sttresultjson", // your bucket name,
      Key: parsedUrl + ".json", // path to the object you're looking for
    };

    s3.getObject(getParams, function (err, data) {
      // Handle any error and exit
      if (err) return err;

      let objectData = data.Body.toString("utf-8"); // Use the encoding necessary

      setSttObject(objectData);

      let speakerContent = [];
      //const segments = objectData.results.speaker_labels.segments;

      // segments.forEach((segment) => {
      //   speakerContent.push({
      //     speaker: segment.speaker_label,
      //     start_time: segment.start_time,
      //     end_time: end_time,
      //   });
      // });

      //const items = objectData.results.items;
    });
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log("videoFile data changed");
      // test api gateway REST call
      const api =
        "https://85sgmxl2m9.execute-api.us-east-1.amazonaws.com/staging2";

      var today = new Date();
      var date =
        today.getFullYear().toString() +
        (today.getMonth() + 1).toString() +
        today.getDate().toString();

      console.log("date", date);
      console.log("user", user);

      //[id]_[date]_[type].mp4
      //type: "form" or "lesson"
      let newName = user.username + "_" + date + "_" + "form";

      const data = { body: { name: newName } };

      // Something wrong on the lambda side
      // parse body into JSON and utilize resource

      callSttPromise(newName);

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
      {/* <STTUploadVideo parentUploadTrigger={handleVideoUpload} /> */}
      <STTVideoArchive parentChooseUrl={handleSetVidUrl} />
      <VideoLabeling
        videos={videoFiles}
        vidUrl={vidUrl}
        sttObject={sttObject}
        parentTimeLabeled={handleParentTimeLabel}
        childTimeLabeled={handleChildTimeLabel}
      />
      <STTResults
        parentLabel={parentTimeLabel}
        childLabel={childTimeLabel}
        sttObject={sttObject}
      />
    </Grid>
  );
}

export default STT;
