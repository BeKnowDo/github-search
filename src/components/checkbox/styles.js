import styled from "styled-components";
import { colors, borders } from "../../styled-component-variables";

const CheckboxSC = styled.input`
  width: 20px;
  height: 20px;
  border: 0;
  position: relative;
  margin: 10px 14px 0 0;
  &:after {
    border-radius: 4px;
    border: ${borders.grey};
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    background-color: ${colors.white};
    width: 20px;
    height: 20px;
  }
  &:checked {
    &:after {
      text-align: center;
      font-size: 18px;
      content: "X";
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export default CheckboxSC;
