import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getResults } from "../../store/results/results-actions";

import SearchForm from "../../components/search-form";
import SearchResults from "../../components/search-results";
import Pagination from "../../components/pagination";

class Home extends Component {
  render() {
    const total = Math.round(this.props.results.total_count / 10);
    const results = this.props.results.items ? this.props.results.items : [];

    let searchParameters = {
      q: this.props.q,
      fork: this.props.fork,
      license: this.props.license,
      page: this.props.page,
      stars: this.props.stars,
      perPage: "&per_page=10"
    };

    return (
      <Fragment>
        <SearchForm {...this.props} />
        {total > 1 ? (
          <Pagination
            pageResults={this.props.pageResults}
            searchParameters={searchParameters}
            total={total}
          />
        ) : (
          undefined
        )}
        <SearchResults {...this.props} />
        {total > 1 ? (
          <Pagination
            pageResults={this.props.pageResults}
            searchParameters={searchParameters}
            total={total}
          />
        ) : (
          undefined
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results.results,
    q: state.query.q,
    fork: state.query.fork,
    license: state.query.license,
    page: state.query.page,
    stars: state.query.stars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pageResults: searchParameters => {
      dispatch(getResults(searchParameters));
    },

    handleSubmit: (e, searchParameters) =>
      dispatch(getResults(searchParameters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
