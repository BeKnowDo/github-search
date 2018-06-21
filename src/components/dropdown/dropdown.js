import React, { PureComponent } from "react";
import { DropdownSC } from "./styles";

class Dropdown extends PureComponent {
  render() {
    return (
      <DropdownSC {...this.props}>
        <option value="" defaultValue="selected">
          Select license type
        </option>
        <option value="MIT">MIT</option>
        <option value="ISC">ISC</option>
        <option value="Apache">Apache</option>
        <option value="GPL">GPL</option>
      </DropdownSC>
    );
  }
}

export default Dropdown;
