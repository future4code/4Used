import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductPage from "./ProductPage/ProductPage";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CardsGrid from './CardsGrid/CardsGrid';
import NavbarFilter from './NavbarFilter/NavbarFilter';
import axios from 'axios';
import { RegisterContainer } from "./CadastroDeProdutos/RegisterContainer";

const AppComponentsContainer = styled.div`

`
const StyledGrid = styled(Grid)`
  margin-top: 20px;
`


export class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			currentPage: 'allProducts',
			productIndex: 0
		};
	}

	getCurrentPage = () => {

		if(this.state.productIndex !== undefined) {

      switch(this.state.currentPage) {
				case 'allProducts': 
					return (
						<CardsGrid
							products={this.state.products}
							showProductPage={this.showProductPage}
						/>) 
				case 'productDetail':
					return (
						<ProductPage 
						backToMain={this.showCardsGridPage}
						product={this.state.products[0]}
						/>
					)
				case 'registerPage':
					return (
						<RegisterContainer 
						backToMain={this.showCardsGridPage}
						showRegisterPage={this.showRegisterPage}/>
					)
			}
		} 
	}

	showProductPage = (index) => {
		this.setState({ 
		currentPage: 'productDetail', 
	  productIndex: index
		})
	}

	showCardsGridPage = () => {
		this.setState({ currentPage: 
		'allProducts' })
	}

	showRegisterPage = () => {
		this.setState({ currentPage:
		'registerPage' })
	}

  getProducts = () => {
		axios
			.get("https://us-central1-missao-newton.cloudfunctions.net/fourUsed/products")
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
			<AppComponentsContainer>
				<Header />
				<NavbarFilter />
				<StyledGrid container justify="center" spacing={0}>
					<Grid item xs={12} sm={12} lg={8}>
						{this.getCurrentPage()}
					</Grid>
				</StyledGrid>
				<Footer />
			</AppComponentsContainer>
		);
	}
}
