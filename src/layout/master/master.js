import React from "react";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Header from "../../components/header";
import Footer from "../../components/footer";

const Main = styled.main`
  padding: 10px;
`;
const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // Cols
    gutterWidth: 0.5, // rem
    outerMargin: 0.3, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
};

const Master = props => ({
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Main>{this.props.children}</Main>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Footer />
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>
    );
  }
});

export default Master;
