import styled from "styled-components";
import { borders, colors } from "../../styled-component-variables";
import { ChevronRight, ChevronLeft } from "react-feather";

import { Row } from "react-styled-flexboxgrid";

export const RowCenteredSc = styled(Row)`
  justify-content: center;
`;

export const ChevronLeftSc = styled(ChevronLeft)`
  &:hover {
    cursor: pointer;
  }
`;

export const ChevronRightSc = styled(ChevronRight)`
  &:hover {
    cursor: pointer;
  }
`;

export const PaginationSC = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 400px;
  user-select: none;
`;

export const PaginationItemSc = styled.li`
  padding: 4px 10px;
  border: ${borders.grey};
  list-style-type: none;
  text-align: center;
  margin-bottom: 15px;
  background-color: ${props =>
    props.active === "on" ? colors.blue : colors.white};

  color: ${props => (props.active === "on" ? colors.white : colors.black)};

  transition: background-color 0.2s ease-in;
  border-radius: 4px;
  &:hover {
    transition: background-color 0.2s ease-out;
    background-color: ${colors.blue};
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const PaginationMoreSc = styled.span`
  display: inline-block;
  padding: 4px;
`;
