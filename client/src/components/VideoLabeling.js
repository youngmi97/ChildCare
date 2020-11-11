import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },
  testGrid1: {
    borderRight: "solid",
    borderRightWidth: "0.2px",
    borderRightColor: "#D3D3D3",
    height: "600px",
  },
  testGrid2: {
    height: "600px",
  },

  testTitle: {
    fontSize: "20px",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },
  wrappingCard: {
    width: "100%",
    height: "100%",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#D3D3D3",
    borderRadius: 16,
    marginTop: 10,
  },
}));

function VideoLabeling(props) {
  const classes = useStyles();

  const [videos, setVideos] = useState([]);

  const audioSrc =
    "https://sttdemoaudio.s3.us-east-2.amazonaws.com/audioUpload/demoTrimmed2.wav";

  useEffect(() => {
    console.log("prop video changed");
    setVideos(props.videos);

    if (videos.length != 0) {
      console.log("local videos", videos);
    }
  }, [props.videos, videos]);

  return (
    <Card className={classes.wrappingCard}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid className={classes.testTitle} container direction="row" xs={12}>
          비디오 라벨링 단계
        </Grid>
        <Grid
          className={classes.testGrid1}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={8}
        >
          {/* <ReactAudioPlayer
            src="../demoAudio/demoTrimmed2.wav"
            autoplay
            controls
            onCanPlay={() => console.log("audio has been loaded")}
            onPause={(e) => console.log("paused")}
            onPlay={(e) => console.log("played")}
          /> */}
          {videos[0] ? (
            <ReactPlayer
              url={videos[0].preview}
              width="640px"
              height="360px"
              controls={true}
            />
          ) : (
            <ReactPlayer
              url={"test"}
              width="640px"
              height="360px"
              controls={true}
            />
          )}
          <img width="100%" src="/progressLabelSample.png"></img>
        </Grid>
        <Grid
          className={classes.testGrid2}
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <p>부모님이 말할 때 ‘P’를 눌러주세요.</p>
          <p>아이들이 말할 때 ‘C’를 눌러주세요.</p>
          <p>경고를 주고 싶을 때 ‘W’를 눌러주세요.</p>
          <p>영상에 표시하고 싶을 때 ‘S’를 눌러주세요.</p>
        </Grid>
      </Grid>
    </Card>
  );
}

export default VideoLabeling;
