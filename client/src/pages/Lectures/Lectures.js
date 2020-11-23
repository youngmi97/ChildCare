import React, { useState, useContext, useEffect } from "react";
import Video from "./Video";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../../context/auth";
import { Card } from "@material-ui/core";
import ButtonBar from "./ButtonBar";

export default function Lectures() {
  const { user } = useContext(AuthContext);
  const [videoFiles, setVideoFiles] = useState([]);
  const [step, setStep] = useState("1");

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
  }

  useEffect(() => {
    if (videoFiles.length != 0) {
      console.log("videoFile data changed");
    }
  }, [videoFiles]);

  return (
    <Grid container direction="row" xs={12}>
      <Card style={{ width: "100%", height: "800px", overflowY: "scroll" }}>
        <ButtonBar step={step} onChange={handleChange} />
        <Video
          step={step}
          title={'"' + videoName[step - 1] + '"'}
          url={videoList[step - 1]}
          parentUploadTrigger={handleVideoUpload}
        />
      </Card>
    </Grid>
  );
}
