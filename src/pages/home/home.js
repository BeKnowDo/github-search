import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getResults } from "../../store/results/results-actions";

import SearchForm from "../../components/search-form";
import SearchResults from "../../components/search-results";
import Pagination from "../../components/pagination";

class Home extends Component {
  render() {
    const resultPage = this.props.resultPage || 1;
    const total = Math.round(this.props.results.total_count / 10);
    const results = this.props.results.items;

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
            resultPage={resultPage}
            pageResults={this.props.pageResults}
            total={total}
          />
        ) : (
          undefined
        )}
        <SearchResults {...this.props} />
        {results.length > 0 ? (
          <Pagination
            resultPage={resultPage}
            pageResults={this.props.pageResults}
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
      getResults(searchParameters, dispatch);
    },

    handleSubmit: searchParameters => {
      getResults(searchParameters, dispatch);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
