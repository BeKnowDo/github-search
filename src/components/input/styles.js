import styled from "styled-components";
import { borders, shadows } from "../../styled-component-variables";

const InputSc = styled.input`
  padding: 10px;
  margin: 10px 0 20px;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${borders.grey};
  display: inline-flex;
  width: 100%;

  &.error {
    border: ${borders.error};
  }

  &:focus {
    outline: none;
    border: ${borders.focus};
    box-shadow: ${shadows.grey};
  }
`;

export default InputSc;
