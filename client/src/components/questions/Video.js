import axios from "axios";
import React, { Component } from "react";
import Modal from "./Modal.js";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import ReactPlayer from "react-player";

const styles = (theme) => ({
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
  question: {
    margin: "20px 90px",
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
});

class Video extends Component {
  state = {
    // Initially, no file is selected
    videoFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state\
    this.setState({ videoFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", this.state.videoFile, this.state.videoFile.name);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.videoFile) {
      return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <ReactPlayer
              url="/서하책읽기.mp4"
              controls={true}
              width="70%"
              height="300px"
            />
          </Grid>
        </div>
      );
    } else {
      return <p>파일이 업로드 되지 않았습니다.</p>;
    }
  };

  render() {
    const { classes } = this.props;
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
          <p>교육력</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.subtitle}
        >
          <p>
            아동과 5분간 상호작용 영상을 촬영하여 업로드 해 주세요.
            <br />
            소꿉놀이, 의사놀이, 블록놀이 등의 장난감을 활용한 놀이 영상
            <br />
            성인과 아동의 1:1 영상으로, 두사람이 화면에 모두 나오게
            촬영해주세요.
            <br />
            상단의 샘플 영상을 참고해주세요.
          </p>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.question}
        >
          <p>샘플영상</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <ReactPlayer
            url="/서하책읽기.mp4"
            controls={true}
            width="70%"
            height="300px"
          />
        </Grid>
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
          className={classes.question}
        >
          <div>
            <input type="file" onChange={this.onFileChange} />
          </div>
          {this.fileData()}
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <button style={btnStyle1} onClick={this.props.onBack}>
            이전 단계로 이동
          </button>
          <button style={btnStyle} onClick={this.props.onContinue}>
            다음 단계로 이동
          </button>
        </Grid>
      </div>
    );
  }
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
export default withStyles(styles)(Video);
