import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu secondary pointing size="massive" color="#FFB800" style={{backgroundColor: "white", padding:"5px"}} >
      <a
        style= {{marginTop: "14px", marginRight:"30px", marginLeft:"50px", color:"#FFB800", fontSize:"25px", fontWeight:"600"} }
        href ="/"
      > TALKI-i </a>
      <Menu.Item
        name="언어발달 평가"
        active={activeItem === "언어발달 평가"}
        onClick={handleItemClick}
        as={Link}
        to="/form"
      />

      <Menu.Item
        name="평가결과"
        active={activeItem === "평가결과"}
        onClick={handleItemClick}
        as={Link}
        to="/results"
      />
      <Menu.Item
        name="교육"
        active={activeItem === "교육"}
        onClick={handleItemClick}
        as={Link}
        to="/lectures"
      />

      <Menu.Menu position="right">
        <Menu.Item
        style={{marginRight:"50px"}}
          name="logout"
          // active={activeItem === "home"}
          onClick={logout}
          as={Link}
          to="/"
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu secondary pointing size="massive" color="#FFB800" style={{backgroundColor: "white", padding:"5px"}}>
      <a
        style= {{marginTop: "14px", marginRight:"30px", marginLeft:"50px", color:"#FFB800", fontSize:"25px", fontWeight:"600"} }
        href ="/"
      > TALKI-i </a>

      <Menu.Menu position="right" style={{marginRight:"30px"}}>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
