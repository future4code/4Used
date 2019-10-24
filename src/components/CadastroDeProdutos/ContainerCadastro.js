import React from 'react';
import styled from 'styled-components';
import { CadastroImage } from './CadastroImage';
import { CadastroDados } from './CadastroDados';
import { ContinueButton } from './ContinueButton';


const MainContainer = styled.div `
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
		}
	}

	changeUI = () => {
		this.setState ({cadastroImageView: !this.state.cadastroImageView})
	}

	render () {
		const atualUI = this.state.cadastroImageView ? (
			<CadastroImage></CadastroImage>
			) : (
				<CadastroDados></CadastroDados>)

		return (
			<MainContainer>
				{atualUI}
				<ContinueButton onClickContinueButton={this.changeUI}></ContinueButton>
			</MainContainer>
		)
	}

} 