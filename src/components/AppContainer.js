import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductPage from "./ProductPage/ProductPage";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CardsGrid from './CardsGrid/CardsGrid';
import NavbarFilter from './NavbarFilter/NavbarFilter';
import axios from 'axios';



const StyledGrid = styled(Grid)`
	margin-top: 20px;
`
export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			products: [],
			showProductPage: false,
		};
	}

	
	
	getProducts = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/fourUsed/products",)
      .then((response) => {
        this.setState({
          products: response.data.products
        });
        console.log("usuarios buscados com sucesso") 
      })
      .catch((error) => {
        console.log("erro no buscar usuarios") 
      })
  }
  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Header />
				<NavbarFilter />
        <StyledGrid container justify="center" spacing={0}>
          <Grid item xs={12} sm={12} lg={8}>
						<CardsGrid products={this.state.products}/>	
						<ProductPage />
          </Grid>
        </StyledGrid>
        <Footer />
      </div>
    );
  }
}