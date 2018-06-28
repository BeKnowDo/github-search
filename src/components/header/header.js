import React, { Component } from "react";
import { HeaderSC } from "./styles";
import logo from "../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <HeaderSC>
        <a href="" title="BKD's Home Page">
          <img src={logo} alt="BKD's Logo" />
        </a>
      </HeaderSC>
    );
  }
}

export default Header;
