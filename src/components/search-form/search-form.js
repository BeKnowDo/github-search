import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";

import FormSc from "./styles";
import { Button } from "../button";
import Input from "../input";
import Dropdown from "../dropdown";
import Checkbox from "../checkbox";
import Loader from "../loader";
import Label from "../label";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // let's leverage component state to avoid unnecessary rerendering

    this.defaultState = {
      q: this.props.q || "",
      stars: this.props.stars || "",
      license: this.props.license || "",
      fork: this.props.fork || false,
      perPage: "&per_page=10"
    };
    this.state = this.defaultState;
  }

  searchParameters() {
    const q = this.state.q || "";
    const stars = this.state.stars || "";
    const license = this.state.license || "";
    const fork = this.state.fork;
    const per_page = 10;

    const searchParameters = {
      q,
      stars,
      license,
      fork,
      per_page
    };

    return searchParameters;
  }

  render() {
    const searchParameters = this.searchParameters();
    const { q, stars, license, fork } = searchParameters;

    return (
      <Fragment>
        <FormSc
          onSubmit={e => {
            e.preventDefault();
            // check if the user provided input
            this.props.handleSubmit(e, {
              ...searchParameters,
              page: 1
            });
          }}
          compact="true"
        >
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="Search Terms" />
              <Input
                type="text"
                placeholder="Search by keyword"
                value={q || ""}
                onChange={e => {
                  this.setState({
                    q: e.target.value
                  });
                }}
              />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="Stars" />
              <Input
                type="text"
                placeholder="Search by stars, i.e.: >=500"
                value={stars || ""}
                onChange={e => {
                  this.setState({
                    stars: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label text="License type" />
              <Dropdown
                license={license}
                onChange={e => {
                  this.setState({
                    license: e.target.value
                  });
                }}
              />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Checkbox
                checked={fork}
                onChange={e => {
                  this.setState({
                    fork: e.target.checked
                  });
                }}
              />
            </Col>
          </Row>

          <Row center="xs">
            <Col xs={6} sm={4} md={3} lg={3}>
              <Button />
            </Col>
          </Row>
        </FormSc>
        {this.props.loader ? <Loader /> : null}
      </Fragment>
    );
  }
}

SearchForm.proptypes = {
  results: PropTypes.array
};

export default SearchForm;
