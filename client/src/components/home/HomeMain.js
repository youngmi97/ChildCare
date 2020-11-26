import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../../index.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  speechCard: {
    width: "80%",
    height: "250px",
    border: "solid",
    borderWidth: 1,
  },
  cardText: {
    float: "left",
    width: "200px",
    height: "200px",
    fontSize: "20px",
    marginTop: "30px",
    marginLeft: "20px",
  },

  imageConfig: {
    width: "60%",
  },
  optionCard: {
    justify: "center",
    marginTop: "20px",
    marginLeft: "20px",
    fontSize: "30px",
  },
  mainText: {
    height: "50px",
    width: "100%",
    fontSize: "60px",
    marginLeft: "20px",
  },

  textOnline: {
    height: "50px",
    width: "100%",
    fontSize: "30px",
    fontColor: "#dedede",
    marginLeft: "20px",
  },

  cardImg: {
    width: "30%",
    marginTop: "30px",
    marginRight: "20px",
    float: "right",
  },

  firstHalf: {
    height: "500px",
    // border: "solid",
    // borderColor: "#dedede",
    // borderWidth: "1px",
  },

  secondHalf: {
    height: "300px",
  },
  secondCardRow: {
    height: "300px",
  },
}));

function HomeMain(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cardDepth1, setCardDepth1] = useState(true);
  const [cardDepth2, setCardDepth2] = useState(true);
  const [cardDepth3, setCardDepth3] = useState(true);
  const [cardDepth4, setCardDepth4] = useState(true);

  function mouseCardOn1() {
    setCardDepth1(false);
  }

  function mouseCardoff1() {
    setCardDepth1(true);
  }

  function mouseCardOn2() {
    setCardDepth2(false);
  }

  function mouseCardoff2() {
    setCardDepth2(true);
  }

  function mouseCardOn3() {
    setCardDepth3(false);
  }

  function mouseCardoff3() {
    setCardDepth3(true);
  }

  function mouseCardOn4() {
    setCardDepth4(false);
  }

  function mouseCardoff4() {
    setCardDepth4(true);
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      xs={12}
    >
      <Grid
        container
        className={classes.firstHalf}
        direction="row"
        justify="left"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="column"
          justify="left"
          alignItems="left"
          xs={4}
        >
          <div className={classes.textOnline}>Online</div>
          <div className={classes.mainText}>LANGUAGE</div>
          <div className={classes.mainText}>DEVELOPMENT</div>
          <div className={classes.mainText}>ASSESSMENT</div>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={8}
        >
          <img
            className={classes.imageConfig}
            src="/mock-illustration.jpg"
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.secondHalf}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn1}
            onMouseOut={mouseCardoff1}
            raised={cardDepth1}
            onClick={handleOpen}
          >
            <div className={classes.optionCard}>언어발달평가</div>
            <div className={classes.cardText}>
              {" "}
              온라인으로 아동의 언어발달을 평가하고 결과를 받을 수 있는 서비스
            </div>
            <img className={classes.cardImg} src="/checklist.png"></img>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn2}
            onMouseOut={mouseCardoff2}
            raised={cardDepth2}
            onClick={handleOpen}
          >
            <div className={classes.optionCard}>연구참여신청</div>
            <div className={classes.cardText}>
              {" "}
              이화여대 언어병리학과 아동연구실에서 진행되는 연구대상자로 참여
              신청
            </div>
            <img className={classes.cardImg} src="/participation.png"></img>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.secondCardRow}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn3}
            onMouseOut={mouseCardoff3}
            raised={cardDepth3}
            onClick={handleOpen}
          >
            <div className={classes.optionCard}>부모교육</div>
            <div className={classes.cardText}>
              {" "}
              온라인으로 상호작용 증진을 목적으로 한 부모교육 서비스 제공
            </div>
            <img className={classes.cardImg} src="/family.png"></img>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn4}
            onMouseOut={mouseCardoff4}
            raised={cardDepth4}
            onClick={handleOpen}
          >
            <div className={classes.optionCard}>전문가교육</div>
            <div className={classes.cardText}>
              {" "}
              온라인으로 아동 관련 직종에 종사하는 전문가를 대상으로 한 교육
              서비스 제공
            </div>
            <img className={classes.cardImg} src="/teacher.png"></img>
          </Card>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">회원가입후 이용가능합니다</h2>
            <p id="transition-modal-description">
              이미 회원이시라면 로그인을 해주세요
            </p>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}

export default HomeMain;
