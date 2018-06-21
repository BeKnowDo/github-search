import React, { PureComponent, Fragment } from "react";
import { string } from "prop-types";
import CheckboxSC from "./styles";
import Label from "../label";

class Checkbox extends PureComponent {
  render() {
    return (
      <Fragment>
        <CheckboxSC {...this.props} />
        <Label text="Include forked repos" />
      </Fragment>
    );
  }
}

Checkbox.propTypes = {
  type: string
};

Checkbox.defaultProps = {
  type: "checkbox"
};

export default Checkbox;
