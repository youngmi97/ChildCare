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
class Illness extends Component {
  state = {};
  show = () => {
    if (this.props.personal.illnessAtBirth === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.illness === "Yes") {
      return false;
    } else {
      return true;
    }
  };
  show2 = () => {
    if (this.props.personal.surgery === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show3 = () => {
    if (this.props.personal.medication === "Yes") {
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
          <p>병력</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.subtitle}
        >
          <p>아동의 병력에 대해 적어주세요.</p>
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
            <p>1. 아동을 출산하는 과정에서 질병이나 사고가 있었습니까?</p>
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
                  name="illnessAtBirth"
                  value={this.props.personal.illnessAtBirth}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="illnessAtBirth"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="illnessAtBirth"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="무엇이었는지 적어주세요."
              style={{ width: "60%" }}
              onChange={this.props.onChange}
              id="illnessAtBirth1"
              value={this.props.personal.illnessAtBirth1}
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
            <p>2. 아동에게 특별한 병력이 있습니까?</p>
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
                  name="illness"
                  value={this.props.personal.illness}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="illness"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="illness"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="예: 중이염/천식/축농증/편도염/알러지/폐렴/난청 등"
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="illness1"
              value={this.props.personal.illness1}
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
            <p>3. 아동에게 수술 또는 입원 이력이 있습니까?</p>
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
                  name="surgery"
                  value={this.props.personal.surgery}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="surgery"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="surgery"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="언제, 얼마동안, 병명 및 사유를 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="surgery1"
              value={this.props.personal.surgery1}
              autoComplete="off"
              fullWidth
              disabled={this.show2()}
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
            <p>4. 아동이 현재 투약중인 약물이 있습니까?</p>
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
                  name="medication"
                  value={this.props.personal.medication}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="medication"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="medication"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="어떤 약물인지 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="medication1"
              value={this.props.personal.medication1}
              autoComplete="off"
              fullWidth
              disabled={this.show3()}
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
export default withStyles(styles)(Illness);
