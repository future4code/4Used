import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Logo4used from './4used.png';
import Sacola from './sacola.png'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { RegisterContainer } from '../CadastroDeProdutos/RegisterContainer';


const StyledBadge1 = withStyles(theme => ({
	badge: {
		right: -3,
		border: '1px solid black',
		backgroundColor: 'red',
		padding: '0 4px',
		color: 'white',
		fontWeight: 'bold',
		marginTop: '10px',
		marginRight: '3px',
	},
}))(Badge);

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
const StyledBagImage = styled.img`
	cursor: pointer;
`

const StyledDrawer = styled.div`
	width: 300px;
`

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchValue: "",
			currentPageHome: true,
			currentPageSale: false,
			textButton: "VOU VENDER!",
			badgeNumber: 2,
			right: false,
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

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const sideList = (
			<StyledDrawer>

			</StyledDrawer>
		);

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
						>
							{this.state.textButton}
						</StyledButton>
					</ContainerHeader>

					<IconButton aria-label="cart">
						<div>
							<StyledBadge1 badgeContent={this.state.badgeNumber} color="red">
								<StyledBagImage
									src={Sacola}
									onClick={this.toggleDrawer('right', true)}
								/>
							</StyledBadge1>
							<Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
								<div
									tabIndex={0}
									role="button"
									onClick={this.toggleDrawer('right', false)}
								>
									{sideList}
								</div>
							</Drawer>
						</div>
					</IconButton>
				</StyledHeader>
				{this.state.currentPageSale
				&& <RegisterContainer/>}
			</React.Fragment>
		)
	}
}

export default Header;