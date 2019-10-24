import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductPage from "./ProductPage/ProductPage";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import React from 'react'
import CardsGrid from './CardsGrid/CardsGrid'


const StyledGrid = styled(Grid)`
	margin-top: 20px;
`
export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <StyledGrid container justify="center" spacing={0}>
          <Grid item xs={12} sm={12} lg={8}>
						<CardsGrid />	
						<ProductPage />
          </Grid>
        </StyledGrid>
        <Footer />
      </div>
    );
  }
}