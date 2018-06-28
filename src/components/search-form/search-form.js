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
      keywords: this.props.keywords || "",
      url: "",
      stars: this.props.stars || "",
      license: this.props.license || "",
      forked: this.props.forked || false
    };
    this.state = this.defaultState;
  }

  render() {
    const keywords = this.state.keywords || "";
    const stars = this.state.stars || "";
    const license = this.state.license || "";
    const forked = this.state.forked;

    let url = "";

    if (keywords.length > 0) {
      url = url + `${keywords}`;
    }

    if (stars.length > 0) {
      url = url + ` stars:${stars}`;
    }

    if (license.length > 0) {
      url = url + ` license:${license}`;
    }

    if (forked === true) {
      url = url + ` fork:true`;
    }

    const searchParameters = {
      keywords,
      stars,
      license,
      forked,
      url
    };

    return (
      <Fragment>
        <FormSc
          onSubmit={e => {
            e.preventDefault();

            // check if the user provided input
            if (url.length > 0) {
              this.props.handleSubmit(e, searchParameters);
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
                value={keywords || ""}
                onChange={e => {
                  this.setState({
                    keywords: e.target.value
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
                checked={this.state.forked}
                onChange={e => {
                  this.setState({
                    forked: e.target.checked
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
