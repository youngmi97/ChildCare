import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MenuBar from "../MenuBar";
import "../../App.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const useStyles = makeStyles((theme) => ({
  modal: {},
  paper: {
    marginLeft: "35vw",
    marginRight: "35vw",
    marginTop: "37vh",
    marginBottom: "37vh",
    width: "30vw",
    height: "26vh",
    backgroundImage: "url(/PleaseLogin.jpg)",
    backgroundSize: "30vw 26vh",
    outline: "none",
    border: "1px solid #F9BE00",
  },
  root: {
    width: "100vw",
    height: "100vh",
    overflowY: "scroll",
    padding: "0",
    scrollbarWidth: "none",
    overflowX: "hidden",
  },
  main1: {
    backgroundImage: "url(/Main1.jpg)",
    backgroundSize: "100vw 100vh",
    width: "100vw",
    height: "93vh",
  },
  main2: {
    marginTop: "7vh",
    backgroundImage: "url(/Main2.jpg)",
    backgroundSize: "100vw 100vh",
    width: "100vw",
    height: "93vh",
  },
  main3: {
    backgroundImage: "url(/Main3.jpg)",
    backgroundSize: "100vw 100vh",
    width: "100vw",
    height: "93vh",
  },
  main4: {
    backgroundImage: "url(/Main4.jpg)",
    backgroundSize: "100vw 100vh",
    width: "100vw",
    height: "94vh",
  },
  footer: {
    height: "20vh",
    backgroundColor: "#F9BE00",
  },
}));

function HomeMain(props) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen1 = () => {
    !user ? openModal(1) : history.push("./form");
  };
  const handleOpen2 = () => {
    !user ? openModal(2) : window.open("https://dongsunyim.com/dongsun");
  };
  const handleOpen3 = () => {
    !user ? openModal(3) : history.push("./lectures");
  };
  const handleOpen4 = () => {
    !user ? openModal(4) : history.push("./lectures");
  };

  const openModal = (num) => {
    setOpen(true);
    switch (num) {
      case 1:
        setMessage(
          "아동의 언어발달 수준이 궁금하거나 언어 발달 지연이 의심되는 경우, 온라인 언어발달 평가를 통해 가정에서 전문가의 언어치료 서비스를 받을 수 있습니다. 아동의 언어 발달 수준, 사용하는 언어 종류에 관계없이 온라인 평가가 가능합니다."
        );
        break;
      case 2:
        setMessage(
          "이화여자대학교 언어병리학과 아동언어연구실 (Child Language Lab)에서 진행하고 있는 다양한 연구에 참여하여 아동의 언어와 인지에 관련된 활동을 경험해 볼 수 있습니다(http://dongsunyim.com)."
        );
        break;
      case 3:
        setMessage(
          "아동과의 상호작용을 통해 아동에게 양질의 언어 자극을 주는 기술, 아동의 언어발달을 극대화하는 기술을 체계적인 연구 결과들을 기반으로 전문가가 교육합니다."
        );
        break;
      case 4:
        setMessage(
          "회원 가입 후 아동에 대한 정보를 입력하고 평가에 필요한 간단한 영상들을 업로드하면, 전문가가 분석 및 평가를 실시하여 2주 후 보고서를 받아보실 수 있습니다."
        );
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MenuBar />
      <div className={classes.main2}>
        <div
          style={{
            marginLeft: "7vw",
            paddingTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "2vw",
              fontWeight: "400",
              color: "#e57f16",
              marginBottom: "3vh",
            }}
          >
            online
          </div>
          <div
            style={{
              fontSize: "4vw",
              color: "#717071",
              lineHeight: "8vh",
              fontWeight: "300",
              marginBottom: "4vh",
            }}
          >
            LANGUAGE
            <br />
            DEVELOPMENT
            <br />
            ASSESSMENT
          </div>
          <div>
            <hr
              style={{
                width: "3vw",
                border: "none",
                borderTop: "0.6vh solid #e57f16",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "1.5vw",
              color: "#717071",
              lineHeight: "4vh",
              fontWeight: "300",
              marginTop: "4vh",
            }}
          >
            We study how children learn language and <br />
            how lange learning can down
          </div>
        </div>
      </div>
      <div className={classes.main1}>
        <div
          style={{
            marginLeft: "7vw",
            paddingTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "60vw",
          }}
        >
          <div
            style={{
              fontSize: "2vw",
              fontWeight: "400",
              color: "#e57f16",
              marginBottom: "3vh",
            }}
          >
            online
          </div>
          <div
            style={{
              fontSize: "4vw",
              color: "#717071",
              lineHeight: "8vh",
              fontWeight: "300",
              marginBottom: "4vh",
            }}
          >
            CHILD
            <br />
            LANGUAGE
            <br />
            ASSESSMENT
          </div>
          <div>
            <hr
              style={{
                width: "3vw",
                border: "none",
                borderTop: "0.6vh solid #e57f16",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "1.5vw",
              color: "#717071",
              lineHeight: "4vh",
              fontWeight: "300",
              marginTop: "4vh",
            }}
          >
            Services to assess children's language <br />
            development online and receive results
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginLeft: "21vw",
              marginTop: "2vh",
            }}
          >
            <Button
              style={{ fontSize: "1.2vw", color: "#e57f16" }}
              onClick={handleOpen1}
            >
              {" "}
              {">"} MORE{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.main3}>
        <div
          style={{
            marginLeft: "7vw",
            paddingTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "2vw",
              fontWeight: "400",
              color: "#e57f16",
              marginBottom: "3vh",
            }}
          >
            online
          </div>
          <div
            style={{
              fontSize: "4vw",
              color: "#717071",
              lineHeight: "8vh",
              fontWeight: "300",
              marginBottom: "4vh",
            }}
          >
            PARENT
            <br />
            PROFESSIONAL
            <br />
            EDUCATION
          </div>
          <div>
            <hr
              style={{
                width: "3vw",
                border: "none",
                borderTop: "0.6vh solid #e57f16",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "1.5vw",
              color: "#717071",
              lineHeight: "4vh",
              fontWeight: "300",
              marginTop: "4vh",
            }}
          >
            Providing parental education <br />
            services for the purpose <br />
            of enhancing online interaction
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: "15vw",
              marginTop: "2vh",
            }}
          >
            <Button
              style={{
                fontSize: "1.2vw",
                color: "#e57f16",
              }}
              onClick={handleOpen3}
            >
              {" "}
              {">"} MORE{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.main4}>
        <div
          style={{
            marginLeft: "7vw",
            paddingTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "60vw",
          }}
        >
          <div
            style={{
              fontSize: "2vw",
              fontWeight: "400",
              color: "#e57f16",
              marginBottom: "3vh",
            }}
          >
            online
          </div>
          <div
            style={{
              fontSize: "4vw",
              color: "#717071",
              lineHeight: "8vh",
              fontWeight: "300",
              marginBottom: "4vh",
            }}
          >
            PARTICIPATION
            <br />
            IN RESEARCH
          </div>
          <div>
            <hr
              style={{
                width: "3vw",
                border: "none",
                borderTop: "0.6vh solid #e57f16",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "1.5vw",
              color: "#717071",
              lineHeight: "4vh",
              fontWeight: "300",
              marginTop: "4vh",
            }}
          >
            Application for participation as a subject <br />
            of research conducted in the language
            <br />
            pathology department children's
            <br />
            research lab of Ehwa Woman's University
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginLeft: "22vw",
              marginTop: "2vh",
            }}
          >
            <Button
              style={{ fontSize: "1.2vw", color: "#e57f16" }}
              onClick={handleOpen2}
            >
              {" "}
              {">"} MORE{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            marginLeft: "15vw",
            paddingTop: "3vh",
            marginBottom: "3vh",
          }}
        >
          <img src="/002.png" width="60px" height="60px" />
          <div
            style={{
              fontSize: "16px",
              color: "white",
              marginBottom: "12px",
              marginLeft: "30px",
              fontWeight: "600",
            }}
          >
            개인정보 처리방침
          </div>
          <div
            style={{
              fontSize: "16px",
              marginBottom: "12px",
              marginLeft: "30px",
              fontWeight: "600",
            }}
          >
            이용 약관
          </div>
          <div
            style={{
              fontSize: "16px",
              marginBottom: "12px",
              marginLeft: "30px",
              fontWeight: "600",
            }}
          >
            윤리 경영
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            marginLeft: "15vw",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "1.2vh",
          }}
        >
          <div>대표전화 02.3277.6720 KK </div>
          <div style={{ margin: "0px 1vw" }}>|</div>
          <div>대표이메일 sunyim@isay.com </div>
          <div style={{ margin: "0px 1vw" }}>|</div>
          <div>
            서울 서대문구 이화여대길 52 이화여자대학교, 교육관 A동 502호 I SAY
            LAB{" "}
          </div>
        </div>
      </div>
      <div className={classes.modal}>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <p
                style={{
                  fontSize: "17px",
                  color: "#e57f16",
                  marginLeft: "1.2vw",
                  marginRight: "6vw",
                  marginTop: "4vh",
                }}
              >
                {message}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default HomeMain;
