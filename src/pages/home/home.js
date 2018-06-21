import React, { Component } from "react";
import { connect } from "react-redux";
import { getResults } from "../../store/results/results-actions";
import { query, stars, license, forked } from "../../store/query/query-actions";

import SearchForm from "../../components/search-form";

class Home extends Component {
  render() {
    return <SearchForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    query: state.query.query,
    forked: state.query.forked,
    license: state.query.license,
    stars: state.query.stars,
    results: state.results.results,
    loader: state.loader.loader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: e => {
      const queryValue = e.target ? e.target.value : "";
      query({ query: queryValue }, dispatch);
    },
    starQuery: e => {
      const starQuery = e.target ? e.target.value : "";
      stars({ stars: starQuery }, dispatch);
    },
    licenseQuery: e => {
      const licenseType = e.target ? e.target.value : "";
      license({ license: licenseType }, dispatch);
    },
    forkedQuery: e => {
      const includeForked = e.target ? e.target.checked : "";
      forked({ forked: includeForked }, dispatch);
    },
    handleSubmit: (e, queryString) => {
      e.preventDefault();
      getResults(queryString, dispatch);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
