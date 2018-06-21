import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-styled-flexboxgrid";
import { ResultItemSc, ForkedFlagSc, PargraphSc, OwnerAvatar } from "./styles";

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
    const results = this.props.results;

    return results.map(result => {
      return this.resultItem(result);
    });
  }

  render() {
    return <React.Fragment>{this.buildList()}</React.Fragment>;
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
};

SearchResults.defaultProps = {
  results: []
};

export default SearchResults;
