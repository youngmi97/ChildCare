import React, { useContext, useState, useEffect } from "react";
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
  const [prof, setProf] = useState(false);
  const [message, setMessage] = useState("");

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
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
    !user ? openModal(4) : history.push("./results");
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

export default MenuBar;
