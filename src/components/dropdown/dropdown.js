import React, { PureComponent } from "react";
import { DropdownSC } from "./styles";

class Dropdown extends PureComponent {
  render() {
    const license = this.props.license;
    const values = [
      {
        text: "Select license type",
        value: ""
      },
      {
        text: "MIT",
        value: "MIT"
      },
      {
        text: "ISC",
        value: "ISC"
      },
      {
        text: "Apache",
        value: "Apache"
      },
      {
        text: "GPL",
        value: "GPL"
      }
    ];
    return (
      <DropdownSC {...this.props} value={license}>
        {values.map(item => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </DropdownSC>
    );
  }
}

export default Dropdown;
