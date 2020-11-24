import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

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
});

class Education extends Component {
  state = {};
  show = () => {
    if (this.props.personal.education === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.history === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show2 = () => {
    if (this.props.personal.teacherFeedback === "Yes") {
      return false;
    } else {
      return true;
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
          <p>아동의 교육력에 대해 적어주세요.</p>
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
            <p>1. 아동이 어린이집/유치원/학교에 다니고 있습니까?</p>
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
              <FormControl component="fieldset">
                <RadioGroup
                  name="education"
                  value={this.props.personal.education}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="education"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="education"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="기관명"
              style={{ width: "40%" }}
              onChange={this.props.onChange}
              id="institute"
              value={this.props.personal.institute}
              autoComplete="off"
              fullWidth
              disabled={this.show()}
            />
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
              2. 아동이 언어치료, 놀이치료, 기타 재활치료를 받은 경험이
              있습니까?
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
              <FormControl component="fieldset">
                <RadioGroup
                  name="history"
                  value={this.props.personal.history}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="history"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="history"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="어떤 종류의 치료였는지 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="treatmemt"
              value={this.props.personal.treatment}
              autoComplete="off"
              fullWidth
              disabled={this.show1()}
            />
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
              3. 교사로부터 언어 또는 학업 관련한 문제를 보고 받은 적이
              있습니까?
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
              <FormControl component="fieldset">
                <RadioGroup
                  name="teacherFeedback"
                  value={this.props.personal.teacherFeedback}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="teacherFeedback"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="teacherFeedback"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="어떤 문제를 보고하였는지 간략하게 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="teacherFeedback1"
              value={this.props.personal.teacherFeedback1}
              autoComplete="off"
              fullWidth
              disabled={this.show2()}
            />
          </Grid>
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

export default withStyles(styles)(Education);
