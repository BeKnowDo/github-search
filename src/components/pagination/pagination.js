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
  buildPagination() {
    const total = this.props.total;
    const searchParameters = this.props.searchParameters;
    const page = searchParameters.page;

    // console.log({ ...searchParameters, page });

    let startingPage = page > 2 ? page - 1 : page;
    const lastPage = page + 3 <= total ? startingPage + 3 : total;

    const dispatchAction = index => {
      this.props.pageResults({
        q: searchParameters.q,
        stars: searchParameters.stars,
        license: searchParameters.license,
        fork: searchParameters.fork,
        page: index,
        per_page: "10"
      });
    };

    if (page >= lastPage) {
      startingPage = page - 2 > 0 ? page - 2 : 1;
    }

    let pages = [];

    pages.push(
      <Fragment key="previous-results-action">
        <Col xs={1}>
          <ChevronLeftSc
            onClick={e => {
              if (page >= 2) {
                dispatchAction(page - 1);
              }
            }}
          />
        </Col>
      </Fragment>
    );

    // Always show first page item and separator
    if (startingPage >= 2) {
      pages.push(
        <Fragment key="previous-results-fragment">
          <Col key={1}>
            <PaginationItemSc
              active={page === 1 ? "on" : undefined}
              onClick={e => {
                this.props.pageResults({
                  q: searchParameters.q,
                  stars: searchParameters.stars,
                  license: searchParameters.license,
                  fork: searchParameters.fork,
                  page: 1,
                  per_page: "10"
                });
              }}
            >
              {1}
            </PaginationItemSc>
          </Col>
          <Col key="PaginationMoreIndicatorLeft">
            <PaginationMoreSc>...</PaginationMoreSc>
          </Col>
        </Fragment>
      );
    }

    // build page items
    let i;
    for (i = startingPage; i <= lastPage; i++) {
      const scope = i;
      if (i <= lastPage) {
        pages.push(
          <Col
            key={i}
            onClick={e => {
              e.preventDefault();
              dispatchAction(scope);
            }}
          >
            <PaginationItemSc active={page === i ? "on" : ""}>
              {i}
            </PaginationItemSc>
          </Col>
        );
      }
    }

    // Always show last page item and separator
    if (total > lastPage) {
      pages.push(
        <Col key="PaginationMoreIndicatorRight">
          <PaginationMoreSc>...</PaginationMoreSc>
        </Col>
      );
      pages.push(
        <Col key={total}>
          <PaginationItemSc
            onClick={e => {
              dispatchAction(total);
            }}
          >
            {total}
          </PaginationItemSc>
        </Col>
      );
    }

    pages.push(
      <Fragment key="next-results-action">
        <Col xs={1}>
          <ChevronRightSc
            onClick={e => {
              if (page < lastPage) {
                this.props.pageResults({
                  q: searchParameters.q,
                  stars: searchParameters.stars,
                  license: searchParameters.license,
                  fork: searchParameters.fork,
                  page: page + 1,
                  per_page: "10"
                });
              }
            }}
          />
        </Col>
      </Fragment>
    );
    return pages;
  }
  render() {
    const searchParameters = this.props.searchParameters;

    return this.props.total !== undefined &&
      searchParameters.page !== undefined ? (
      <PaginationSC>
        <RowCenteredSc>{this.buildPagination()}</RowCenteredSc>
      </PaginationSC>
    ) : (
      undefined
    );
  }
}

export default Pagination;
