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
    margin: "10px 120px",
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
          <div>
            <span style={{ color: "#e57f16" }}>{"<"}</span>아동의 교육력에 대해
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
            <div>1. 아동이 어린이집/유치원/학교에 다니고 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="education"
                  value={this.props.personal.education}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            <div>
              2. 아동이 언어치료, 놀이치료, 기타 재활치료를 받은 경험이
              있습니까?
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="history"
                  value={this.props.personal.history}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "row",
                  }}
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
              placeholder="어떤 종류의 치료였는지 적어주세요."
              style={{ width: "95%" }}
              onChange={this.props.onChange}
              id="treatment"
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
            <div>
              3. 교사로부터 언어 또는 학업 관련한 문제를 보고 받은 적이
              있습니까?
            </div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="teacherFeedback"
                  value={this.props.personal.teacherFeedback}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "row",
                  }}
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
              placeholder="어떤 문제를 보고하였는지 간략하게 적어주세요."
              style={{ width: "95%" }}
              onChange={this.props.onChange}
              id="teacherFeedback1"
              value={this.props.personal.teacherFeedback1}
              autoComplete="off"
              fullWidth
              disabled={this.show2()}
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

export default withStyles(styles)(Education);
