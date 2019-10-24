import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import 'typeface-roboto';



const Title = styled.h1`
	font-size: 4rem;
`

const CadastroImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const ImagesContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const ImageBorder = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 250px;
	width: 250px;
	margin: 20px;
	border-width: thin;
	border-color: grey;
	border-style: dotted;
`
const PhotoProduct = styled.img`
	height: 100%;
	width: 100%;
	border: 2px solid black;
`

const Input = styled.input`
	width: 50%;
	height: 60px;
`

const SendButton = styled(Button)`
	margin-top: 50px;
`

const StyledButton = styled(Button)`
	margin-top: 50px;
`

export class CadastroImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			urlValue: "",
			listImageProduct: [],
		}
	}


	onChangeUrl = (event) => {
		this.setState({ urlValue: event.target.value })

	}

	onClickInsertPhotoProduct = () => {
		const { listImageProduct } = this.state;
		listImageProduct.push(this.state.urlValue);
		this.setState({ listImageProduct });
		this.state.urlValue = "";
	}

	handleContinueBtn = () => {
		if (this.state.listImageProduct.length) {
			this.props.onSend(this.state.listImageProduct)
		}
	}

	render() {
		const productPhoto = this.state.listImageProduct.map((image) => {
			return (<PhotoProduct src={image} />)
		})

		return (
			<CadastroImageContainer>
				<Title>Eu quero ibagens!</Title>
				<p>
					Cadastre imagens do que você quer vender,
					para que as pessoas possam ver o quão legal é o seu produto!
				</p>
				<ImagesContainer>
					<ImageBorder>{productPhoto[0]}</ImageBorder>
					<ImageBorder>{productPhoto[1]}</ImageBorder>
					<ImageBorder>{productPhoto[2]}</ImageBorder>
				</ImagesContainer>
				<Input
					type="text"
					placeholder="URL da imagem"
					value={this.state.urlValue}
					onChange={this.onChangeUrl}
				/>
				<SendButton
					variant="contained"
					color="secondary"
					onClick={this.onClickInsertPhotoProduct}
					disabled={this.state.listImageProduct.length >= 3}
				>
					Adicionar Fotos
				</SendButton>
				<div>
					<StyledButton
						variant="contained"
						color="secondary"
						onClick={this.handleContinueBtn}
					>
						Continuar
			</StyledButton>
				</div>
			</CadastroImageContainer>
		)
	}

} 