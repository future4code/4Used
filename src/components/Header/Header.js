/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import "typeface-roboto";
import Logo4used from "./4used.png";
import Sacola from "./sacola.png";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import Cart from "./Cart/Cart";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const mockDeCarrinho = [
	{
		name: "Bicicleta",
		price: 70,
		qnt: 2,
		img: "https://picsum.photos/200/300"
	},
	{
		name: "Bicicleta",
		price: 70,
		qnt: 3,
		img: "https://picsum.photos/300/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	},
	{
		name: "Bicicleta",
		price: 10,
		qnt: 2,
		img: "https://picsum.photos/400/300"
	}
];

const StyledBadge1 = withStyles(theme => ({
	badge: {
		right: -3,
		border: "1px solid black",
		backgroundColor: "red",
		padding: "0 4px",
		color: "white",
		fontWeight: "bold",
		marginTop: "10px",
		marginRight: "3px"
	}
}))(Badge);

const StyledHeader = styled.header`
  background-color: #ff9945;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px 0 #43434f;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff9945;
  width: 100%;
	height: 80px;
`;

const StyledLogo = styled.img`
  width: 80px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.2);
	}
	margin-left: 10px;
`;

const StyledButton = styled(Button)`
  width: 150px;
  height: 50px;
	box-shadow: 1px 1px 5px black;
	margin-right: 10px;
	background-color: #fcd991;
	color: #43434f;
`
const StyledButtonFinalizar = styled(Button)`
  width: 100px;
  height: 50px;
  margin: 10px;
`

const StyledBagImage = styled.img`
  cursor: pointer;
`;

const StyledInput = styled(InputBase)`
  padding: 10px;
  width: 90%;
  height: 1px;
`;
const StyledPaper = styled(Paper)`
  width: 40%;
  display: flex;
  align-items: center;
`;

const StyledDiv = styled.div`
  position: sticky;
  bottom: 0;
  margin-top: 1px;
  flex: 1 0 15%;
  background: white;
`;

const BoldTxt = styled.p`
	font-weight: bold;
	margin: 10px;
`

const StyledDrawer = styled(Drawer)`
display: flex;
flex-direction:column;
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: "",
			textButton: "VOU VENDER!",
			badgeNumber: 2,
			right: false,
			total: 0
		};
	}

	handleChangeSearch = event => {
		this.setState({ searchValue: event.target.value });
	};

	reloadPage = () => {
		window.location.reload();
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};
	
	handleChangeValue = (value) => {
		this.setState({ total: value });
	}
	
	onClickButton = () => {
		this.props.showRegisterPage();
	}

	render() {
		return (
			<React.Fragment>
				<StyledHeader>
					<ContainerHeader>
						<StyledLogo 
							src={Logo4used} 
							alt="Logo 4used"
							onClick={this.reloadPage} />

						<StyledPaper elevation={4}>
							<StyledInput placeholder="Buscar produtos..." />
							<IconButton aria-label="Search">
								<SearchIcon />
							</IconButton>
							<Divider />
						</StyledPaper>
						<StyledButton
							variant="contained"
							color="primary"
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
									onClick={this.toggleDrawer("right", true)}
								/>
							</StyledBadge1>
							<StyledDrawer
								anchor="right"
								open={this.state.right}
								onClose={this.toggleDrawer("right", false)}
							>
								<Cart products={mockDeCarrinho} onChangeValue={this.handleChangeValue} />
								<StyledDiv>
									<Divider light />
									<Grid container spacing={4}>
										<Grid item xs={6}>
										<BoldTxt> Total</BoldTxt>
										</Grid>
										<Grid item xs={6}>
										<BoldTxt>R$ {this.state.total}</BoldTxt>
										</Grid>
										<Grid item xs={12}>
											<StyledButtonFinalizar
												variant="contained"
												color="primary"
											>
												Finalizar
											</StyledButtonFinalizar>
										</Grid>
									</Grid>
								</StyledDiv>
							</StyledDrawer>
						</div>
					</IconButton>
				</StyledHeader>
			</React.Fragment>
		);
	}
}

export default Header;
