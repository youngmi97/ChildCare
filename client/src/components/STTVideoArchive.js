import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../context/auth";
import VideoThumbnail from "react-video-thumbnail";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import "../index.css";
import { useStateWithCallbackLazy } from "use-state-with-callback";
var AWS = require("aws-sdk");

const useStyles = makeStyles((theme) => ({
  speechCard: {
    width: "100%",
    height: 60,
    marginTop: 20,
    border: "solid",
    borderWidth: 2,
    marginRight: 10,
  },

  testTitle: {
    fontSize: "16px",
    backgroundColor: "#FFB800",
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testTitle2: {
    fontSize: "16px",
    color: "#FFB800",
    fontWeight: "bold",
    textAlign: "left",
    borderBottom: "solid",
    borderBottomWidth: "0.2px",
    borderBottomColor: "#D3D3D3",
    padding: "10px",
    paddingLeft: "30px",
  },

  testGrid: {
    height: "150px",
  },

  videoHolder: {
    height: "100%",
  },

  videoHolder2: {
    height: "100%",
    overflowY: "scroll",
  },

  testingCard: {
    width: "80%",
    height: "80px",
    justifyContent: "center",
  },
  wrappingCard: {
    width: "100%",
    height: "100%",
    border: "solid",
    borderWidth: "2px",
    borderColor: "#D3D3D3",
    borderRadius: 16,
  },
  videoCard: {
    width: "150px",
    height: "150px",
    padding: "10px",
    margin: "10px",
  },
}));

function STTVideoArchive(props) {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  console.log("DASHBOARD USER: ", user);

  const [update, setUpdate] = useState(false);
  const [videoFiles, setVideoFiles] = useStateWithCallbackLazy([]);
  const [currentUrl, setCurrentUrl] = useState("");

  function getVideos() {
    var s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: "us-east-1",
    });

    if (user) {
      s3.listObjectsV2(
        {
          Bucket: "mp4in",
          Prefix: user.username,
        },
        function (err, data) {
          if (err) throw err;
          console.log("mp4in data", data);

          //const objectExists = data.Contents.length > 0;

          setVideoFiles(data.Contents, () => {
            setUpdate(true);
          });

          // have to retrieve the thumbnail from the list of urls
        }
      );
    }
  }

  //function to retrieve scripts
  function getTranscripts() {
    var s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: "us-east-1",
    });

    s3.listObjectsV2(
      {
        Bucket: "sttresultjson",
        Prefix: user.username,
      },
      function (err, data) {
        if (err) throw err;
        console.log("sttresultjson data", data.Contents[0].Key);

        const blobUrl =
          "https://sttresultjson.s3.amazonaws.com/" + data.Contents[0].Key;

        fetch(blobUrl)
          .then((r) => r.text())
          .then((text) => {
            props.setSttObject(JSON.parse(text).results);
            props.setSpeakerSegments(
              JSON.parse(text).results.speaker_labels.segments
            );
            setUpdate(true);
          });
      }
    );
  }

  useEffect(() => {
    getVideos();
    getTranscripts();
    console.log("videoFiles", videoFiles);
  }, []);

  const videoCard = (url, dateObject) => {
    function handleVideoChoose(url) {
      setCurrentUrl(url);
      props.parentChooseUrl(url);
    }

    let date = dateObject || "";
    let dateString = date.toString();

    return (
      <Card
        className={classes.videoCard}
        onClick={() => {
          handleVideoChoose(url);
        }}
      >
        <CardActionArea>
          <VideoThumbnail videoUrl={url} width={128} height={72} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="h5"
              style={{ height: "30px" }}
            >
              {dateString}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }; // end of videoCard

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <Card className={classes.wrappingCard}>
        <Grid className={classes.testTitle} container direction="row" xs={12}>
          유저 영상 목록
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            className={classes.videoHolder2}
            container
            direction="row"
            alignItems="start"
            xs={6}
          >
            <Grid className={classes.testTitle2} container xs={12}>
              평가 영상
            </Grid>
            <Grid
              className={classes.videoHolder}
              container
              alignItems="start"
              xs={12}
            >
              {update ? (
                videoFiles.map((videoData) => {
                  if (videoData) {
                    return videoCard(
                      "https://mp4in.s3.amazonaws.com/" + videoData.Key
                    );
                  } else {
                    return videoCard("");
                  }
                })
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
          <Grid
            className={classes.videoHolder2}
            container
            direction="row"
            alignItems="start"
            xs={6}
          >
            <Grid className={classes.testTitle2} container xs={12}>
              프로그램 영상
            </Grid>
            <Grid
              className={classes.videoHolder}
              container
              alignItems="start"
              xs={12}
            >
              {update ? (
                videoFiles.map((videoData) => {
                  if (videoData) {
                    return videoCard(
                      "https://mp4in.s3.amazonaws.com/" + videoData.Key
                    );
                  } else {
                    return videoCard("");
                  }
                })
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default STTVideoArchive;
