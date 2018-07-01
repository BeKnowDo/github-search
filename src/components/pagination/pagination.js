import React, { Component, Fragment } from "react";
import {
  PaginationSC,
  RowCenteredSc,
  PaginationItemSc,
  PaginationMoreSc,
  ChevronRightSc,
  ChevronLeftSc
} from "./styles";
import { Col } from "react-styled-flexboxgrid";

class Pagination extends Component {
  constructor(props) {
    super(props);

    const defaultState = {
      startingPage: this.props.resultPage || 1,
      lastPage: this.props.total
    };

    this.state = {
      ...defaultState
    };
  }
  buildPagination() {
    const total = this.props.total;
    const resultPage = this.props.resultPage;
    const startingPage = this.state.startingPage;
    const lastPage = resultPage + 5 <= total ? startingPage + 4 : total;
    const range = { startingPage, resultPage, lastPage };

    let pages = [];
    let i;

    console.log(range);

    if (startingPage >= 2) {
      pages.push(
        <Fragment key="previous-results-fragment">
          <Col key={1}>
            <PaginationItemSc active={resultPage === 1 ? "on" : undefined}>
              {1}
            </PaginationItemSc>
          </Col>
          <Col key="PaginationMoreIndicatorLeft">
            <PaginationMoreSc>...</PaginationMoreSc>
          </Col>
        </Fragment>
      );
    }

    for (i = startingPage; i <= lastPage - 1; i++) {
      if (i <= lastPage) {
        pages.push(
          <Col key={i}>
            <PaginationItemSc active={resultPage === i ? "on" : ""}>
              {i}
            </PaginationItemSc>
          </Col>
        );
      }
    }

    if (total >= lastPage) {
      pages.push(
        <Col key="PaginationMoreIndicatorRight">
          <PaginationMoreSc>...</PaginationMoreSc>
        </Col>
      );
      pages.push(
        <Col key={total}>
          <PaginationItemSc>{total}</PaginationItemSc>
        </Col>
      );
    }
    return pages;
  }

  render() {
    const startingPage = this.props.resultPage;
    const lastPage = this.state.lastPage;
    const resultPage = this.props.resultPage;

    return (
      <PaginationSC>
        <RowCenteredSc>
          <Col xs={1}>
            <ChevronLeftSc
              onClick={e => {
                if (this.state.startingPage >= 2) {
                  this.setState({
                    startingPage: startingPage - 1
                  });
                  // update store
                  this.props.pageResults({ resultPage: startingPage - 1 });
                }
              }}
            />
          </Col>

          {this.buildPagination()}

          <Col xs={1}>
            <ChevronRightSc
              onClick={e => {
                if (resultPage < lastPage) {
                  this.setState({
                    startingPage: startingPage + 1
                  });
                  this.props.pageResults({ resultPage: startingPage + 1 });
                }
              }}
            />
          </Col>
        </RowCenteredSc>
      </PaginationSC>
    );
  }
}

export default Pagination;
