import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getResults } from "../../store/results/results-actions";

import SearchForm from "../../components/search-form";
import SearchResults from "../../components/search-results";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SearchForm {...this.props} />
        <SearchResults {...this.props.results} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results.results,
    keywords: state.query.keywords,
    forked: state.query.forked,
    license: state.query.license,
    result_page: state.query.result_page,
    stars: state.query.stars
  };
}

function mapDispatchToProps(dispatch) {
  return {
    previousPageResults: (e, page, fetchURL) => {
      // result_page({ result_page: page }, dispatch);
    },

    nextPageResults: (e, page) => {
      // result_page({ result_page: page }, dispatch);
    },

    handleSubmit: (e, searchParameters) => {
      e.preventDefault();
      getResults(searchParameters, dispatch);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
