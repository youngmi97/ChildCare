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

class Development extends Component {
  show = () => {
    if (this.props.personal.developmentProblem === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  show1 = () => {
    if (this.props.personal.muscleProblem === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  state = {};

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
          <p>발달력</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.subtitle}
        >
          <p>아동의 발달력에 대해 적어주세요.</p>
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
            <p>1. 또래에 비해 걷기 시작한 시기가 늦었습니까? (평균 12개월)</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.answer}
          >
            <FormControl component="fieldset">
              <RadioGroup
                name="walkingAge"
                value={this.state.walkingAge}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  id="walkingAge"
                  value="Slow"
                  control={<Radio />}
                  label="느렸다"
                  onChange={this.props.onChange2}
                />
                <FormControlLabel
                  id="walkingAge"
                  value="Average"
                  control={<Radio />}
                  label="평균이었다"
                  onChange={this.props.onChange2}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid className={classes.qna}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>2. 단어를 사용하기 시작한 시기가 늦었습니까? (평균 10~12개월)</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.answer}
          >
            <FormControl component="fieldset">
              <RadioGroup
                name="speakingAge"
                value={this.state.speakingAge}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  id="speakingAge"
                  value="Slow"
                  control={<Radio />}
                  label="느렸다"
                  onChange={this.props.onChange2}
                />
                <FormControlLabel
                  id="speakingAge"
                  value="Average"
                  control={<Radio />}
                  label="평균이었다"
                  onChange={this.props.onChange2}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid className={classes.qna}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.question}
          >
            <p>
              3. 간단한 문장을 구사하기 시작한 시기가 늦었습니까? (평균
              10~12개월)
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
            <FormControl component="fieldset">
              <RadioGroup
                name="speakingAgeSentence"
                value={this.state.speakingAgeSentence}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  id="speakingAgeSentence"
                  value="Slow"
                  control={<Radio />}
                  label="느렸다"
                  onChange={this.props.onChange2}
                />
                <FormControlLabel
                  id="speakingAgeSentence"
                  value="Average"
                  control={<Radio />}
                  label="평균이었다"
                  onChange={this.props.onChange2}
                />
              </RadioGroup>
            </FormControl>
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
            <p>4. 아동이 식이, 수면, 배변문제를 갖고 있습니까?</p>
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
                  name="developmentProblem"
                  value={this.state.developmentProblem}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="developmentProblem"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="developmentProblem"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="무엇인지 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="developmentProblem1"
              value={this.props.personal.developmentProblem1}
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
            <p>5. 아동이 대근육, 소근육, 구강 운동 문제를 갖고 있습니까?</p>
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
                  name="muscleProblem"
                  value={this.state.muscleProblem}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    id="muscleProblem"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="muscleProblem"
                    value="No"
                    control={<Radio />}
                    label="아니오"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <TextField
              placeholder="무엇인지 적어주세요."
              style={{ width: "80%" }}
              onChange={this.props.onChange}
              id="muscleProblem1"
              value={this.props.personal.muscleProblem1}
              autoComplete="off"
              fullWidth
              disabled={this.show1()}
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

export default withStyles(styles)(Development);
