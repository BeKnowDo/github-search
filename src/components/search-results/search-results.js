import React, { Component } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import NoResults from "../no-results";
import Star from "react-feather/dist/icons/star";
import { colors } from "../../styled-component-variables/index";

import {
  ResultContainerSc,
  ResultItemSc,
  ForkedFlagSc,
  PargraphSc,
  OwnerAvatar
} from "./styles";

class SearchResults extends Component {
  ForkedFlag = () => {
    return <ForkedFlagSc>forked</ForkedFlagSc>;
  };

  resultItem(item, index) {
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

    const backgroundClass = index % 2 === 0 ? "" : "odd";

    const owner = item.owner;
    const ownerInfo = {
      name: owner.login,
      avatar: owner.avatar_url,
      type: owner.type
    };

    return (
      <ResultItemSc key={repoInfo.id} backgroundClass={backgroundClass}>
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
              {repoInfo.forked ? this.ForkedFlag() : ""}
            </PargraphSc>
            <PargraphSc>{repoInfo.description}</PargraphSc>
          </Col>

          <Col xs={12} sm={3} md={3} lg={3}>
            <Row>
              <Col xs={2} sm={12} md={12} lg={12}>
                <PargraphSc>
                  <Star
                    size={18}
                    color={colors.grey}
                    fill={colors.gold}
                    strokeWidth="1"
                  />
                </PargraphSc>
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
  }

  buildList() {
    const results = this.props.results.items || this.props.results;
    return results.map((result, index) => {
      return this.resultItem(result, index);
    });
  }

  render() {
    const results = this.props.results.items;

    if (results) {
      return <ResultContainerSc>{this.buildList()}</ResultContainerSc>;
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

export default SearchResults;
