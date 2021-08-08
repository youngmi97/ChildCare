import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = (theme) => ({
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
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "normal",
  },
  answer: {
    margin: "0px 30px",
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
  answer2: {
    marginLeft: "120px",
    marginTop: "10px",
    marginBottom: "10px",
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
          <div>
            <span style={{ color: "#e57f16" }}>{"<"}</span>아동의 발달력에 대해
            적어주세요.
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
            <div>
              1. 또래에 비해 걷기 시작한 시기가 늦었습니까? (평균 12개월)
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="walkingAge"
                  value={this.props.personal.walkingAge}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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

                  <FormControlLabel
                    id="walkingAge"
                    value="Fast"
                    control={<Radio />}
                    label="빨랐다"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </div>
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
            <div>
              2. 단어를 사용하기 시작한 시기가 늦었습니까? (평균 10~12개월)
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="speakingAge"
                  value={this.props.personal.speakingAge}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
                  <FormControlLabel
                    id="speakingAge"
                    value="Fast"
                    control={<Radio />}
                    label="빨랐다"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </div>
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
            <div>
              3. 간단한 문장을 구사하기 시작한 시기가 늦었습니까? (평균
              10~12개월)
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="speakingAgeSentence"
                  value={this.props.personal.speakingAgeSentence}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
                  <FormControlLabel
                    id="speakingAgeSentence"
                    value="Fast"
                    control={<Radio />}
                    label="빨랐다"
                    onChange={this.props.onChange2}
                  />
                </RadioGroup>
              </FormControl>
            </div>
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
            <div>4. 아동이 식이, 수면, 배변문제를 갖고 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="developmentProblem"
                  value={this.props.personal.developmentProblem}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.answer2}
          >
            <TextField
              placeholder="무엇인지 적어주세요."
              style={{ width: "95%" }}
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
            <div>5. 아동이 대근육, 소근육, 구강 운동 문제를 갖고 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="muscleProblem"
                  value={this.props.personal.muscleProblem}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            xs={12}
            className={classes.answer2}
          >
            <TextField
              placeholder="무엇인지 적어주세요."
              style={{ width: "95%" }}
              onChange={this.props.onChange}
              id="muscleProblem1"
              value={this.props.personal.muscleProblem1}
              autoComplete="off"
              fullWidth
              disabled={this.show1()}
            />
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
          <Button style={btnStyle1} onClick={this.props.onBack}>
            <span style={{ marginRight: "1vw", marginBottom: "1px" }}>
              {"<"}
            </span>
            이전 단계로 이동
          </Button>
          <Button style={btnStyle} onClick={this.props.onContinue}>
            다음 단계로 이동{" "}
            <span style={{ marginLeft: "1vw", marginBottom: "1px" }}>
              {">"}
            </span>
          </Button>
        </div>
      </div>
    );
  }
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

export default withStyles(styles)(Development);
