import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../App.css";

function MenuBar() {
  return (
    <Menu secondary style={{ marginBottom: "0px" }} size="massive">
      <Menu.Item className={"logo"} name="home" as={Link} to="/">
        Home
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          style={{ fontSize: "14px", fontWeight: "400" }}
          name="demo"
          as={Link}
          to="/demo"
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
