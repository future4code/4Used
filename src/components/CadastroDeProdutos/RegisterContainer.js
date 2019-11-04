import React from 'react';
import styled from 'styled-components';
import { ImageRegister } from './ImageRegister';
import { DataRegister } from './DataRegister';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import BackArrow from '@material-ui/icons/ArrowBackRounded';


const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export class RegisterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ImageRegisterView: true,
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
		this.setState({ ImageRegisterView: !this.state.ImageRegisterView })

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
						'Content-Type': 'application/json'
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
		this.setState({ productsPhotos: images })
		this.changeUI()
	}

	onClickArrow = () => {
		this.props.backToMain();
	}


	render() {

		const atualUI = this.state.ImageRegisterView ? (
			<ImageRegister
				onSend={this.handleImages}
			></ImageRegister>
		) : (
				<DataRegister
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
				</DataRegister>)

		return (
			<MainContainer>
				<IconButton>
					<BackArrow onClick={this.onClickArrow} />
				</IconButton>
				{atualUI}
			</MainContainer>
		)
	}

} 