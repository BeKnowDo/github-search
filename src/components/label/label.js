import React, { PureComponent } from "react";
import { string } from "prop-types";

class Label extends PureComponent {
  render() {
    return <label>{this.props.text}</label>;
  }
}

Label.propTypes = {
  text: string
};

Label.defaultProps = {
  text: "Default label text"
};

export default Label;
