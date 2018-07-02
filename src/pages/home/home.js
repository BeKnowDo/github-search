import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getResults } from "../../store/results/results-actions";

import SearchForm from "../../components/search-form";
import SearchResults from "../../components/search-results";
import Pagination from "../../components/pagination";
// import search from "react-feather/dist/icons/search";

class Home extends Component {
  render() {
    const total = Math.round(this.props.results.total_count / 10);
    const results = this.props.results.items ? this.props.results.items : [];

    let searchParameters = {
      keywords: this.props.keywords,
      forked: this.props.forked,
      license: this.props.license,
      resultPage: this.props.resultPage,
      stars: this.props.stars,
      url: this.props.url
    };

    return (
      <Fragment>
        <SearchForm {...this.props} />
        {results.length > 0 ? (
          <Pagination
            pageResults={this.props.pageResults}
            searchParameters={searchParameters}
            total={total}
          />
        ) : (
          undefined
        )}
        <SearchResults {...this.props} />
        {results.length > 0 ? (
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

function mapStateToProps(state) {
  return {
    results: state.results.results,
    keywords: state.query.keywords,
    forked: state.query.forked,
    license: state.query.license,
    resultPage: state.query.resultPage,
    stars: state.query.stars,
    url: state.query.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageResults: searchParameters => {
      getResults(searchParameters);
    },

    handleSubmit: (e, searchParameters) => {
      e.preventDefault();
      getResults(searchParameters);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
