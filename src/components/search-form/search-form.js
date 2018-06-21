import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";

import FormSc from "./styles";
import { Button } from "../button";
import Input from "../input";
import Dropdown from "../dropdown";
import Checkbox from "../checkbox";
import SearchResults from "../search-results";
import NoResults from "../no-results";
import Loader from "../loader";
import Label from "../label";

class SearchForm extends Component {
  render() {
    const results = this.props.results || "";
    const query = this.props.query || "";
    const stars = this.props.stars || "";
    const license = this.props.license || "";
    const forked = this.props.forked || "";

    return (
      <Fragment>
        <FormSc
          onSubmit={e => {
            e.preventDefault();
            let fetchURL = "";
            if (query.length > 0) {
              fetchURL = fetchURL + `${query}`;
            }

            if (stars.length > 0) {
              fetchURL = fetchURL + ` stars:${stars}`;
            }

            if (license.length > 0) {
              fetchURL = fetchURL + ` license:${license}`;
            }

            if (forked === true) {
              fetchURL = fetchURL + ` fork:only`;
            }

            if (fetchURL.length > 0) {
              this.props.handleSubmit(e, fetchURL);
            }
          }}
          compact="true"
        >
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="Search Terms" />
              <Input
                type="text"
                placeholder="Search by keyword"
                value={query || ""}
                onChange={this.props.handleChange}
              />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="Stars" />
              <Input
                type="text"
                placeholder="Search by stars, i.e.: >=500"
                value={stars || ""}
                onChange={this.props.starQuery}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="License type" />
              <Dropdown onChange={this.props.licenseQuery} />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Checkbox onChange={this.props.forkedQuery} />
            </Col>
          </Row>

          <Row center="xs">
            <Col xs={6} sm={4} md={3} lg={3}>
              <Button />
            </Col>
          </Row>
        </FormSc>
        {this.props.loader ? <Loader /> : null}

        {results !== null && results.length > 0 ? (
          <SearchResults results={results} />
        ) : (
          <NoResults
            data={results}
            copy="Please enter your query and click the SEARCH button above - results will appear here."
            no_results="No results. Please modify your search."
          />
        )}
      </Fragment>
    );
  }
}

SearchForm.proptypes = {
  results: PropTypes.array
};

export default SearchForm;
