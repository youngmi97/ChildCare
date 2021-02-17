import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../../index.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";

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
    height: "100",
    paddingBottom: "30px",
    marginBottom: "50px",
  },
  cardTitle: {
    fontFamily: "'Noto Sans KR', sans serif;",
    fontSize: "20px",
    fontWeight: "600",
    paddingTop: "30px",
  },
  cardText: {
    fontFamily: "'Noto Sans KR', sans serif;",
    fontSize: "16px",
    fontWeight: "600",
    color: "gray",
    width: "80%",
    textAlign: "right",
  },

  imageConfig: {
    width: "70%",
    marginLeft: "70px",
  },
  optionCard: {
    justify: "center",
    marginTop: "20px",
    marginLeft: "20px",
    fontSize: "30px",
  },
  mainText: {
    fontFamily: "'Noto Sans', sans serif;",
    fontSize: "50px",
    padding: "0px",
    margin: "0px",
    fontWeight: "600",
  },

  textOnline: {
    fontFamily: "'Noto Sans', sans serif;",
    fontSize: "35px",
    color: "gray",
    padding: "0px",
    margin: "0px",
    fontWeight: "600",
  },

  cardImg: {
    width: "80%",
    marginTop: "30px",
    marginLeft: "20px",
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
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleOpen1 = () => {
    !user ? setOpen(true) : history.push("./form");
  };
  const handleOpen2 = () => {
    !user ? setOpen(true) : window.open("https://dongsunyim.com/dongsun");
  };
  const handleOpen3 = () => {
    !user ? setOpen(true) : history.push("./lectures");
  };
  const handleOpen4 = () => {
    !user ? setOpen(true) : history.push("./lectures");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cardDepth1, setCardDepth1] = useState(false);
  const [cardDepth2, setCardDepth2] = useState(false);
  const [cardDepth3, setCardDepth3] = useState(false);
  const [cardDepth4, setCardDepth4] = useState(false);

  function mouseCardOn1() {
    setCardDepth1(true);
  }

  function mouseCardoff1() {
    setCardDepth1(false);
  }

  function mouseCardOn2() {
    setCardDepth2(true);
  }

  function mouseCardoff2() {
    setCardDepth2(false);
  }

  function mouseCardOn3() {
    setCardDepth3(true);
  }

  function mouseCardoff3() {
    setCardDepth3(false);
  }

  function mouseCardOn4() {
    setCardDepth4(true);
  }

  function mouseCardoff4() {
    setCardDepth4(false);
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
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
          xs={12}
          sm={5}
        >
          <p className={classes.textOnline}>Online</p>
          <p className={classes.mainText}>LANGUAGE</p>
          <p className={classes.mainText}>DEVELOPMENT</p>
          <p className={classes.mainText}>ASSESSMENT</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          sm={7}
        >
          <img
            className={classes.imageConfig}
            src="/mock-illustration.jpg"
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
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
          xs={12}
          md={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn1}
            onMouseOut={mouseCardoff1}
            raised={cardDepth1}
            onClick={handleOpen1}
          >
            <Grid container direction="row" xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                xs={6}
              >
                <p className={classes.cardTitle}>언어발달평가</p>
                <p className={classes.cardText}>
                  온라인으로 아동의 언어발달을 평가하고 결과를 받을 수 있는
                  서비스
                </p>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                xs={6}
              >
                <img className={classes.cardImg} src="/checklist.png"></img>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn2}
            onMouseOut={mouseCardoff2}
            raised={cardDepth2}
            onClick={handleOpen2}
          >
            <Grid container direction="row" xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                xs={6}
              >
                <p className={classes.cardTitle}>연구참여신청</p>
                <p className={classes.cardText}>
                  이화여대 언어병리학과 아동연구실에서 진행되는 연구대상자로
                  참여 신청
                </p>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                xs={6}
              >
                <img className={classes.cardImg} src="/participation.png"></img>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
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
          xs={12}
          md={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn3}
            onMouseOut={mouseCardoff3}
            raised={cardDepth3}
            onClick={handleOpen3}
          >
            <Grid container direction="row" xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                xs={6}
              >
                <p className={classes.cardTitle}>부모교육</p>
                <p className={classes.cardText}>
                  온라인으로 상호작용 증진을 목적으로 한 부모교육 서비스 제공
                </p>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                xs={6}
              >
                <img className={classes.cardImg} src="/family.png"></img>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Card
            justify="center"
            className={classes.speechCard}
            onMouseOver={mouseCardOn4}
            onMouseOut={mouseCardoff4}
            raised={cardDepth4}
            onClick={handleOpen4}
          >
            <Grid container direction="row" xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                xs={6}
              >
                <p className={classes.cardTitle}>전문가교육</p>
                <p className={classes.cardText}>
                  온라인으로 아동 관련 직종에 종사하는 전문가를 대상으로 한 교육
                  서비스 제공
                </p>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                xs={6}
              >
                <img className={classes.cardImg} src="/teacher.png"></img>
              </Grid>
            </Grid>
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
            <h2 id="transition-modal-title">회원가입 후 사용해 주세요.</h2>
            <p id="transition-modal-description">
              이미 회원이시라면 로그인을 해주세요.
            </p>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}

export default HomeMain;
