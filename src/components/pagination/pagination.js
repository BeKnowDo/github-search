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
    const resultPage = searchParameters.resultPage;

    let startingPage = resultPage > 2 ? resultPage - 1 : resultPage;
    const lastPage = resultPage + 3 <= total ? startingPage + 3 : total;

    const dispatchAction = index => {
      this.props.pageResults({
        keywords: searchParameters.keywords,
        stars: searchParameters.stars,
        license: searchParameters.license,
        forked: searchParameters.forked,
        url: searchParameters.url,
        resultPage: index
      });
    };

    if (resultPage >= lastPage) {
      startingPage = resultPage - 2;
    }

    let pages = [];

    pages.push(
      <Fragment key="previous-results-action">
        <Col xs={1}>
          <ChevronLeftSc
            onClick={e => {
              if (resultPage >= 2) {
                this.props.pageResults({
                  keywords: searchParameters.keywords,
                  stars: searchParameters.stars,
                  license: searchParameters.license,
                  forked: searchParameters.forked,
                  url: searchParameters.url,
                  resultPage: resultPage - 1
                });
              }
            }}
          />
        </Col>
      </Fragment>
    );

    // Always show first page item and seperator
    if (startingPage >= 2) {
      pages.push(
        <Fragment key="previous-results-fragment">
          <Col key={1}>
            <PaginationItemSc
              active={resultPage === 1 ? "on" : undefined}
              onClick={e => {
                this.props.pageResults({
                  keywords: searchParameters.keywords,
                  stars: searchParameters.stars,
                  license: searchParameters.license,
                  forked: searchParameters.forked,
                  url: searchParameters.url,
                  resultPage: 1
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
            <PaginationItemSc active={resultPage === i ? "on" : ""}>
              {i}
            </PaginationItemSc>
          </Col>
        );
      }
    }

    // Always show last page item and seperator
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
              this.props.pageResults({
                keywords: searchParameters.keywords,
                stars: searchParameters.stars,
                license: searchParameters.license,
                forked: searchParameters.forked,
                url: searchParameters.url,
                resultPage: total
              });
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
              if (resultPage < lastPage) {
                this.props.pageResults({
                  keywords: searchParameters.keywords,
                  stars: searchParameters.stars,
                  license: searchParameters.license,
                  forked: searchParameters.forked,
                  url: searchParameters.url,
                  resultPage: resultPage + 1
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
      searchParameters.resultPage !== undefined ? (
      <PaginationSC>
        <RowCenteredSc>{this.buildPagination()}</RowCenteredSc>
      </PaginationSC>
    ) : (
      undefined
    );
  }
}

export default Pagination;
