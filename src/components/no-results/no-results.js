import React, { PureComponent } from "react";
import { H3Sc } from "./styles";

class NoResults extends PureComponent {
  render() {
    return this.props.data && this.props.data.total_count <= 0 ? (
      <H3Sc>{this.props.no_results}</H3Sc>
    ) : (
      <H3Sc>{this.props.copy}</H3Sc>
    );
  }
}

NoResults.defaultProps = {
  copy: "Default no results message"
};

export default NoResults;
