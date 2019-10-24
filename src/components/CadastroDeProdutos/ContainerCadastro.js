import React from 'react';
import styled from 'styled-components';
import { CadastroImage } from './CadastroImage';
import { CadastroDados } from './CadastroDados';
import axios from 'axios';



const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export class ContainerCadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cadastroImageView: true,
			productsPhotos: [],
			nameProduct: '',
			priceProduct: '',
			descriptionProduct: '',
			category: '',
			paymentMethod: '',
			installments: '',
		}
	}

	changeUI = () => {
		this.setState({ cadastroImageView: !this.state.cadastroImageView })

	}

		sendButtonClick = () => {
	    const product = {
	      name: this.state.nameProduct,
	      description: this.state.descriptionProduct,
	      price: this.state.priceProduct,
	      paymentMethod: this.state.paymentMethod,
	      category: this.state.category,
	      photos: this.state.productsPhotos,
	      installments: this.state.installments,
	    }

			const request = axios
	      .post(
	        "https://us-central1-missao-newton.cloudfunctions.net/fourUsed/products",
	        product,
				{
					header: {
						'Content-Type' : 'application/json'
					}
				}
				
					);
				
				request

	      .then((response) => {
	        window.alert("Produto cadastrado com sucesso!", response)
	        window.location.reload()
	      })
	      .catch((error) => {
	        window.alert("Ops, ocorreu um erro. Tente de novo!", error)
	      })
	  }

	
	
		onChangeNameProduct = (event) => {
			this.setState({ nameProduct: event.target.value });
		}
	
		onChangePriceProduct = (event) => {
			this.setState({ priceProduct: event.target.value });
		};
	
		onChangeDescripitonProduct = (event) => {
			this.setState({ descriptionProduct: event.target.value })
		}
	
		onChangeCategoryProduct = (event) => {
			this.setState({ category: event.target.value });
		};
	
		onChangePaymentMethod = (event) => {
			this.setState({ paymentMethod: event.target.value })
		}
	
		onChangeInstallments = (event) => {
			this.setState({ installments: event.target.value })
		}
	
	
	
	
	
		handleImages = (images) => {
		this.setState({ productsPhotos: images },
			
			() => console.log(this.state.productsPhotos)
			)
		this.changeUI()
	}

	render() {
		
		const atualUI = this.state.cadastroImageView ? (
			<CadastroImage
				onSend={this.handleImages}
			></CadastroImage>
		) : (
				<CadastroDados
				nameProduct={this.state.nameProduct}
				onChangeNameProduct={this.onChangeNameProduct}
				
				priceProduct={this.state.priceProduct}
				onChangePriceProduct={this.onChangePriceProduct}
				
				descriptionProduct={this.state.descriptionProduct}
				onChangeDescripitonProduct={this.onChangeDescripitonProduct}

				category={this.state.category}
				onChangeCategoryProduct={this.onChangeCategoryProduct}
				
				paymentMethod={this.state.paymentMethod}
				onChangePaymentMethod={this.onChangePaymentMethod}
				
				installments={this.state.installments}
				onChangeInstallments={this.onChangeInstallments}
				
				onCLickSendButton={this.sendButtonClick}
				>
				</CadastroDados>)

		return (
			<MainContainer>
				{atualUI}
			</MainContainer>
		)
	}

} 