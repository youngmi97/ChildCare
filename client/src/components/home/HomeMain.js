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
          <div>대표전화 02.3277.6720 </div>
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
              <div
                style={{
                  fontSize: "1.5vw",
                  color: "#e57f16",
                  marginLeft: "1.2vw",
                  marginTop: "4vh",
                }}
              >
                서비스 확인이 필요합니다.
              </div>
              <div
                style={{
                  marginLeft: "1.2vw",
                  color: "#717071",
                  fontSize: "1.2vw",
                  marginTop: "2vh",
                  lineHeight: "1.45",
                }}
              >
                현재 해당 서비스는 이용이 불가능합니다. <br /> 아래 연락처로
                문의 부탁드립니다.
              </div>
              <div
                style={{
                  marginLeft: "1.2vw",
                  color: "#313031",
                  fontSize: "1.2vw",
                  marginTop: "2vh",
                }}
              >
                연락처 : sunyim@isay.com
              </div>
              <div
                style={{
                  marginLeft: "1.2vw",
                  color: "#313031",
                  fontSize: "1.2vw",
                  marginTop: "1.2vh",
                }}
              >
                전화 : 02.3277.6720
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default HomeMain;
