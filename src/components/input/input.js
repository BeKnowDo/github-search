import React, { Component } from "react";
import { string } from "prop-types";
import InputSc from "./styles";

export default class Input extends Component {
  render() {
    return (
      <InputSc
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.text}
        {...this.props}
      />
    );
  }
}

Input.propTypes = {
  text: string,
  type: string
};

Input.defaultProps = {
  text: "Search...",
  type: "text"
};
