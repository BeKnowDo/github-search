import React, { Component } from "react";
import { string } from "prop-types";

import ButtonSc from "./styles";

export default class Button extends Component {
  render() {
    return (
      <ButtonSc type={this.props.type} {...this.props}>
        {this.props.value}
      </ButtonSc>
    );
  }
}

Button.propTypes = {
  value: string,
  type: string
};

Button.defaultProps = {
  value: "Search...",
  type: "submit"
};
