import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-styled-flexboxgrid";
import Pagination from "../pagination";
import NoResults from "../no-results";

import {
  ResultContainerSc,
  ResultItemSc,
  ForkedFlagSc,
  PargraphSc
  // OwnerAvatar
} from "./styles";

class SearchResults extends Component {
  ForkedFlag = () => {
    return <ForkedFlagSc>forked</ForkedFlagSc>;
  };

  resultItem = item => {
    const repoInfo = {
      id: item.id,
      name: item.name,
      full_name: item.full_name,
      url: item.html_url,
      description:
        item.description ||
        "Whoops! This owner did not provide a repo description.",
      stars: item.stargazers_count,
      license: item.license ? item.license.name : `No license selected`,
      forked: item.fork,
      fork_count: item.forks_count || 0
    };

    const repoOwner = {
      name: item.owner.login,
      avatar: item.owner.avatar_url
    };

    return (
      <ResultItemSc key={repoInfo.id}>
        <Row>
          <Col xs={12} sm={6}>
            <PargraphSc>
              <a
                href={repoInfo.url}
                taraget="_blank"
                title={`Click to visit ${repoInfo.full_name}`}
              >
                {repoInfo.full_name}
              </a>
              {repoInfo.forked ? this.ForkedFlag() : undefined}
            </PargraphSc>
            <PargraphSc>{repoInfo.description}</PargraphSc>
          </Col>

          <Col xs={12} sm={3} md={3} lg={3}>
            <Row>
              <Col xs={2} sm={12} md={12} lg={12}>
                <PargraphSc>Stars:</PargraphSc>
              </Col>
              <Col xs={9} sm={12} md={12} lg={12}>
                <PargraphSc>{repoInfo.stars}</PargraphSc>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={3} md={3} lg={3}>
            <Row center="xs">
              <Col xs={2} sm={12} md={12} lg={12}>
                <PargraphSc>License:</PargraphSc>
              </Col>
              <Col xs={10} sm={12} md={12} lg={12}>
                <PargraphSc>{repoInfo.license}</PargraphSc>
              </Col>
            </Row>
          </Col>
        </Row>
      </ResultItemSc>
    );
  };

  buildList() {
    const results = this.props.items;
    return results.map(result => {
      return this.resultItem(result);
    });
  }

  render() {
    const page = this.props.result_page || 1;
    const total = this.props.total_count;
    const results = this.props.items;

    if (results) {
      return (
        <Fragment>
          {results.length > 0 ? (
            <Pagination
              page={page}
              previousPageResults={e => {
                const targetPage = page - 1;
                if (targetPage >= 0) {
                  this.props.previousPageResults(e, targetPage, "");
                }
              }}
              nextPageResults={e => {
                const targetPage = page + 1;
                if (page + 1 <= total) {
                  this.props.nextPageResults(e, targetPage, "");
                }
              }}
              total={total}
            />
          ) : (
            undefined
          )}
          <ResultContainerSc>{this.buildList()}</ResultContainerSc>
        </Fragment>
      );
    } else {
      return (
        <NoResults
          data={results}
          copy="Please enter your query and click the SEARCH button above - results will appear here."
          no_results="No results. Please modify your search."
        />
      );
    }
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
};

export default SearchResults;
