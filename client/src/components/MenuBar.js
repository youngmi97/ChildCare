import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
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
    !user ? setOpen(true) : history.push("./results");
  };
  const handleOpen5 = () => {
    history.push("./login");
  };
  const handleOpen6 = () => {
    history.push("./register");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuBar = user ? (
    user.prof ? (
      <Menu
        fixed="top"
        pointing
        style={{
          backgroundColor: "#F9BE00",
          padding: "5px",
          margin: "0px",
        }}
      >
        <a
          style={{
            marginRight: "30px",
            marginLeft: "50px",
            color: "#FFFFFF",
            fontSize: "25px",
            fontWeight: "600",
            margin: "0px",
          }}
          href="/dashboard"
        >
          <img src="/002.png" width="50px" height="50px" />
        </a>

        <Menu.Menu position="right">
          <Menu.Item
            style={{ marginRight: "50px" }}
            name="로그아웃"
            // active={activeItem === "home"}
            onClick={logout}
            as={Link}
            to="/"
          />
        </Menu.Menu>
      </Menu>
    ) : (
      <Menu
        secondary
        pointing
        size="massive"
        fixed="top"
        style={{
          height: "7vh",
          backgroundColor: "#F9BE00",
          padding: "5px",
          margin: "0px",
          borderBottom: "none",
          fontSize: "1.8vh",
          alignItems: "center",
        }}
      >
        <a
          style={{
            marginRight: "30px",
            marginLeft: "50px",
            color: "#FFFFFF",
            fontSize: "25px",
            fontWeight: "600",
          }}
          href="/"
        >
          {" "}
          <img src="/002.png" width="50px" height="50px" />
        </a>

        <Menu.Menu position="right" style={{ marginRight: "30px" }}>
          <Menu.Item
            style={{ color: "white", fontWeight: "600" }}
            name="언어발달평가"
            active={activeItem === "언어발달 평가"}
            onClick={handleOpen1}
          />
          <Menu.Item
            style={{ color: "white", fontWeight: "600" }}
            name="부모 전문가 교육"
            active={activeItem === "부모 전문가 교육"}
            onClick={handleOpen3}
          />
          <Menu.Item
            style={{ color: "white", fontWeight: "600" }}
            name="평가결과"
            active={activeItem === "평가결과"}
            onClick={handleOpen4}
          />
          <Menu.Item
            style={{ color: "white", fontWeight: "600" }}
            name="연구참여"
            active={activeItem === "연구참여"}
            onClick={handleOpen2}
          />
          <Menu.Item
            style={{ color: "white", fontWeight: "800" }}
            name="로그아웃"
            // active={activeItem === "home"}
            onClick={logout}
            as={Link}
            to="/"
          />
        </Menu.Menu>
      </Menu>
    )
  ) : (
    <Menu
      secondary
      pointing
      size="massive"
      fixed="top"
      style={{
        height: "7vh",
        backgroundColor: "#F9BE00",
        padding: "5px",
        margin: "0px",
        borderBottom: "none",
        fontSize: "1.8vh",
        alignItems: "center",
      }}
    >
      <a
        style={{
          marginRight: "30px",
          marginLeft: "50px",
          color: "#FFFFFF",
          fontSize: "25px",
          fontWeight: "600",
        }}
        href="/"
      >
        {" "}
        <img src="/002.png" width="50px" height="50px" />
      </a>

      <Menu.Menu position="right" style={{ marginRight: "30px" }}>
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="언어발달평가"
          active={activeItem === "언어발달 평가"}
          onClick={handleOpen1}
        />
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="부모 전문가 교육"
          active={activeItem === "부모 전문가 교육"}
          onClick={handleOpen3}
        />
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="평가결과"
          active={activeItem === "평가결과"}
          onClick={handleOpen4}
        />
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="연구참여"
          active={activeItem === "연구참여"}
          onClick={handleOpen2}
        />
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="로그인"
          active={activeItem === "login"}
          onClick={handleOpen5}
        />
        <Menu.Item
          style={{ color: "white", fontWeight: "600" }}
          name="회원가입"
          active={activeItem === "register"}
          onClick={handleOpen6}
        />
      </Menu.Menu>
    </Menu>
  );

  return (
    <div>
      {menuBar}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <div
              style={{
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
              }}
            >
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

export default MenuBar;
