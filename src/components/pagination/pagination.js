import React, { PureComponent } from "react";
import {
  PaginationSC,
  PaginationItemSc,
  PaginationMoreSc,
  ChevronRightSc,
  ChevronLeftSc
} from "./styles";
import { Row, Col } from "react-styled-flexboxgrid";

class Pagination extends PureComponent {
  buildPagination() {
    const total = Math.round(this.props.total / 10);
    const page = this.props.page;

    let pages = [];
    let i;
    for (i = 1; i < total; i++) {
      if (i <= 5) {
        pages.push(
          <Col key={i}>
            <PaginationItemSc active={page === i ? "on" : undefined}>
              {i}
            </PaginationItemSc>
          </Col>
        );
      }
    }
    if (total >= 5) {
      pages.push(
        <Col key="PaginationMoreSc">
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
    return (
      <PaginationSC>
        <Row>
          <Col xs={1}>
            <ChevronLeftSc onClick={this.props.previousPageResults} />
          </Col>
          {this.buildPagination()}

          <Col xs={1}>
            <ChevronRightSc onClick={this.props.nextPageResults} />
          </Col>
        </Row>
      </PaginationSC>
    );
  }
}

export default Pagination;
