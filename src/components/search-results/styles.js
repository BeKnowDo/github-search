import styled from "styled-components";
import { colors, borders } from "../../styled-component-variables";

// TODO: breaks these up

export const ResultContainerSc = styled.div`
  padding: 5px 0;
`;

export const OwnerAvatar = styled.div`
  padding: 20px 0 0;
  a {
    border-radius: 50%;
    overflow: hidden;
    display: block;
    max-width: 120px;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

export const ResultItemSc = styled.li`
  border: ${borders.grey};
  border-bottom: 0;
  list-style-type: none;
  padding: 20px 10px;

  background-color: ${props =>
    props.backgroundClass === "odd" ? colors.whiteSilver : "none"};

  &:last-child {
    border: ${borders.grey};
  }

  > div {
    > div {
      text-align: center;
      &:first-child {
        text-align: left;
      }
    }
  }

  @media (max-width: 48em) {
    > div {
      > div {
        text-align: left;
      }
    }
  }
`;

export const ForkedFlagSc = styled.span`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 4px 10px;
  position: absolute;
  right: 10px;
`;

export const PargraphSc = styled.p`
  position: relative;
  padding: 10px;
  margin: 0;
  a {
    color: ${colors.blue};
    font-weight: 700;
  }
`;
