import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

const CadastroImageContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const ImagesContainer = styled.div `
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const ImageBorder = styled.section `
	height: 250px;
	width: 250px;
	margin: 20px;
	border-width: thin;
	border-color: grey;
	border-style: dotted;
`
const Input = styled.input `
	width: 50%;
	margin-top: 50px;
`

const SendButton = styled(Button)`
	margin-top: 50px;
`


export class CadastroImage extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {

		}
	}

	render () {
		return (
			<CadastroImageContainer>
				<h1>Eu quero ibagens!</h1>
				<p>
					Cadastre imagens do que você quer vender, 
					para que as pessoas possam ver o quão legal é o seu produto!
				</p>
				<ImagesContainer>
					<ImageBorder></ImageBorder>
					<ImageBorder></ImageBorder>
					<ImageBorder></ImageBorder>
				</ImagesContainer>
				<Input 
					type="text"
					placeholder="URL da imagem"
				/>
				<SendButton
					variant="contained" 
					color="secondary" 
				>
					Enviar
				</SendButton>
			</CadastroImageContainer>
		)
	}

} 