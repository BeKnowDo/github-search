import React, { Component } from "react";
import FooterSC from "./styles";

class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    return (
      <FooterSC>
        <p>
          &copy; {this.getYear()}
          <a href="//bkd.io" title="BKD Home Page">
            {" "}
            BKD, Inc. - CONFIDENTIAL
          </a>
        </p>
      </FooterSC>
    );
  }
}

export default Footer;
