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
          <div>
            <span style={{ color: "#e57f16" }}>{"<"}</span>아동의 병력에 대해
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
            <div>1. 아동을 출산하는 과정에서 질병이나 사고가 있었습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="illnessAtBirth"
                  value={this.props.personal.illnessAtBirth}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            <div>2. 아동에게 특별한 병력이 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="illness"
                  value={this.props.personal.illness}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            <div>3. 아동에게 수술 또는 입원 이력이 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="surgery"
                  value={this.props.personal.surgery}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
            <div>4. 아동이 현재 투약중인 약물이 있습니까?</div>
            <div className={classes.answer}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="medication"
                  value={this.props.personal.medication}
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                  }}
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
export default withStyles(styles)(Illness);
