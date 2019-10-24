import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Logo4used from './4used.png';
import TesteCondicional from '../TesteCondicional';
import TesteCondicional2 from '../TesteCondicional2';


// import ContainerCadastro from './ContainerCadastro/ContainerCadastro.js'

const StyledHeader = styled.header`
	background-color: #FF9945;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 3px 0  #43434F;
`
const ContainerHeader = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #FF9945;
	width: 80%;
	margin-left: 5%;
`
const StyledLogo = styled.img`
	width: 80px;
	cursor: pointer;
	transition: all .4s ease-in-out;

	&:hover{ 
		transform: scale(1.2);
	}
`
const StyledInput = styled.input`
	height: 50px;
	width: 40%;
	font-size: 1.5rem;
	box-shadow: 0 0 3px 0  #43434F;
	padding-left: 10px;
	border: none;
	
	&:focus {
		outline: none;
	}
	&::-webkit-input-placeholder {
		font-size: 1.5rem;
		padding-left: 2px;
  }
`
const StyledButton = styled.button`
	margin: 0 20px;
	width: 200px;
	height: 50px;
	border: none;
	cursor: pointer;
	background-color: #43434F;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	font-family: 'roboto', sans-serif;
	transition: 0.5s all;

	&:hover{
		background-color: #76767F;
	}
`

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchValue: "",
			currentPageHome: true,
			currentPageSale: false,
			textButton: "VOU VENDER!"
		}
	}

	handleChangeSearch = (event) => {
		this.setState({ searchValue: event.target.value })
	}

	onClickButton = () => {
		this.setState(
			{
				currentPageHome: !this.state.currentPageHome,
				currentPageSale: !this.state.currentPageSale,
			}, () => this.changeButtonText())
	}

	changeButtonText = () => {
		this.setState({
			textButton: this.state.currentPageHome ? "VOU VENDER!" : "QUERO COMPRAR!",
		})
	}

	render() {
		return (
			<React.Fragment>
				<StyledHeader>
					<ContainerHeader>
						<StyledLogo src={Logo4used} alt="Logo 4used" />
						<StyledInput
							type="text"
							placeholder="Pesquise pela loja"
							value={this.state.searchValue}
							onChange={this.handleChangeSearch}
						/>
						<StyledButton
							onClick={this.onClickButton}
						>{this.state.textButton}
					</StyledButton>
					</ContainerHeader>
				</StyledHeader>

			</React.Fragment>
		)
	}
}

export default Header;