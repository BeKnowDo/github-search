import styled from "styled-components";
import { colors } from "../../styled-component-variables";

const FooterSC = styled.footer`
  text-align: center;
  font-size: 16px;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 10px;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;
export default FooterSC;
