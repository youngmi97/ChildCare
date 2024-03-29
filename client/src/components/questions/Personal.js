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

    fontSize: "25px",
    color: "#e57f16",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "120px",

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

class Personal extends Component {
  state = {
    gender: "",
    broSis: "",
  };
  show = () => {
    if (this.props.personal.impaired === "Yes") {
      return false;
    } else {
      return true;
    }
  };

  calcAge = (date) => {
    var year;
    var month;

    if (date.length < 8) {
      return;
    } else {
      year = date.substring(0, 4);
      month = date.substring(4, 6);
      var today = new Date();
      var mm = String(today.getMonth() + 1); //January is 0!
      var yyyy = today.getFullYear();
      var childYear = yyyy - year;
      var childMonth = mm - month;
      if (childMonth < 0) {
        childMonth = 12 + childMonth;
        childYear = childYear - 1;
      }
    }

    return childYear + "년" + childMonth + "개월";
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
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
          <p>아동의 기본정보</p>
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
            {" "}
            <span style={{ color: "#e57f16" }}>{"<"}</span> 아동의 기본 정보에
            대해 적어주세요.
          </p>
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
            <div>1. 아동 성별</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  id="gender"
                  name="gender"
                  value={this.props.personal.gender}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
                >
                  <FormControlLabel
                    id="gender"
                    value="Male"
                    control={<Radio />}
                    label="남자"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="gender"
                    value="Female"
                    control={<Radio />}
                    label="여자"
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
            <div>2. 아동 이름</div>
            <div style={{ width: "20vw", marginLeft: "2vw" }}>
              <TextField
                placeholder="아동의 이름을 적어주세요."
                onChange={this.props.onChange}
                id="name"
                value={this.props.personal.name}
                autoComplete="off"
                style={{ width: "100%" }}
              />
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
            <div>3. 생년 월일</div>
            <div style={{ width: "20vw", marginLeft: "2vw" }}>
              <TextField
                placeholder="아동의 생년월일을 적어주세요. 예)20190412"
                onChange={this.props.onChange}
                id="dateOfBirth"
                value={this.props.personal.dateOfBirth}
                autoComplete="off"
                style={{ width: "100%" }}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {this.calcAge(this.props.personal.dateOfBirth)}
                    </InputAdornment>
                  ),
                }}
              />
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
            <div>4. 형제 또는 자매가 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="broSis"
                  value={this.props.personal.broSis}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    id="broSis"
                    value="Yes"
                    control={<Radio />}
                    label="예"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="broSis"
                    value="No"
                    control={<Radio />}
                    label="아니오"
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
            <div>5. 장애가 있는 아동입니까?</div>

            <div className={classes.answer}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                xs={12}
              >
                <FormControl component="fieldset">
                  <RadioGroup
                    name="impaired"
                    value={this.props.personal.impaired}
                    onChange={this.handleChange}
                    style={{
                      display: "flex",
                      width: "60vw",
                      flexDirection: "row",
                    }}
                  >
                    <FormControlLabel
                      id="impaired"
                      value="Yes"
                      control={<Radio />}
                      label="예"
                      onChange={this.props.onChange2}
                    />
                    <TextField
                      placeholder="진단명"
                      style={{ width: "20%", marginRight: "2vw" }}
                      onChange={this.props.onChange}
                      id="impairment"
                      value={this.props.personal.impairment}
                      autoComplete="off"
                      fullWidth
                      disabled={this.show()}
                    />
                    <FormControlLabel
                      id="impaired"
                      value="No"
                      control={<Radio />}
                      label="아니오"
                      onChange={this.props.onChange2}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
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
            <p>6. 이 아동은 가정에서 어떤 언어를 사용합니까?</p>
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
              style={{ width: "90%" }}
              placeholder="가정에서 사용하는 언어를 적어주세요. (한국어, 영어 등)"
              onChange={this.props.onChange}
              id="primaryLanguage"
              value={this.props.personal.primaryLanguage}
              autoComplete="off"
              fullWidth
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
            <p>7. 이 아동은 학교에서 어떤 언어를 사용합니까?</p>
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
              style={{ width: "90%" }}
              placeholder="학교에서 사용하는 언어를 적어주세요. (한국어, 영어 등)"
              onChange={this.props.onChange}
              id="schoolLanguage"
              value={this.props.personal.schoolLanguage}
              autoComplete="off"
              fullWidth
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
            <p>8. 이 아동은 어떤 언어 문제가 있습니까?</p>
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
              style={{ width: "90%" }}
              placeholder="예: 이해는 하는 것 같은데 표현을 전혀 하지 못한다."
              onChange={this.props.onChange}
              id="problem"
              value={this.props.personal.problem}
              autoComplete="off"
              fullWidth
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
            <p>9. 언어 문제의 원인이 무엇이라고 생각하십니까?</p>
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
              style={{ width: "90%" }}
              placeholder="예: 어릴 때 너무 힘들어서 자극을 잘 못 준 것 같다. "
              onChange={this.props.onChange}
              id="reason"
              value={this.props.personal.reason}
              autoComplete="off"
              fullWidth
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
            <div>
              10. 아동의 언어문제가 어떻게 진행되고 있다고 생각하십니까?
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="improvement"
                  value={this.props.personal.improvement}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    id="improvement"
                    value="getting better"
                    control={<Radio />}
                    label="개선되고 있다"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="improvement"
                    value="no change"
                    control={<Radio />}
                    label="변화가 없다"
                    onChange={this.props.onChange2}
                  />
                  <FormControlLabel
                    id="improvement"
                    value="getting worse"
                    control={<Radio />}
                    label="악화되고 있다"
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
            <p>11. 아동은 자신의 언어문제를 인지하고 있습니까?</p>
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
              placeholder="예: 인지하는 것 같다, 자기가 원하는 대로 안되면 친구를 때린다"
              style={{ width: "90%" }}
              onChange={this.props.onChange}
              id="awareness"
              value={this.props.personal.awareness}
              autoComplete="off"
              fullWidth
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

export default withStyles(styles)(Personal);
