<<<<<<< HEAD
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

=======
import React from "react";
import styled from "styled-components";
import "typeface-roboto";
import Logo4used from "./4used.png";
import Sacola from "./sacola.png";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { ContainerCadastro } from "../CadastroDeProdutos/ContainerCadastro";
import Cart from "./Cart/Cart";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

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
  ,
  {
    name: "Bicicleta",
    price: 10,
    qnt: 2,
    img: "https://picsum.photos/400/300"
  },
  ,
  {
    name: "Bicicleta",
    price: 10,
    qnt: 2,
    img: "https://picsum.photos/400/300"
  },
  ,
  {
    name: "Bicicleta",
    price: 10,
    qnt: 2,
    img: "https://picsum.photos/400/300"
  },
  ,
  {
    name: "Bicicleta",
    price: 10,
    qnt: 2,
    img: "https://picsum.photos/400/300"
  },
  ,
  {
    name: "Bicicleta",
    price: 10,
    qnt: 2,
    img: "https://picsum.photos/400/300"
  }
];
>>>>>>> Sacolinha card layout; Input e Button do Header;

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
  justify-content: space-around;
  align-items: center;
  background-color: #ff9945;
  width: 80%;
  margin-left: 5%;
`;
const StyledLogo = styled.img`
  width: 80px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
`;
const StyledBagImage = styled.img`
  cursor: pointer;
`;

const StyledInput = styled(InputBase)`
  padding: 10px;
  width: 90%;
`;
const StyledPaper = styled(Paper)`
  width: 40%;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      currentPageHome: true,
      currentPageSale: false,
      textButton: "VOU VENDER!",
      badgeNumber: 2,
      right: false
    };
  }

<<<<<<< HEAD
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
=======
  handleChangeSearch = event => {
    this.setState({ searchValue: event.target.value });
  };

  onClickButton = () => {
    this.setState(
      {
        currentPageHome: !this.state.currentPageHome,
        currentPageSale: !this.state.currentPageSale
      },
      () => this.changeButtonText()
    );
  };

  changeButtonText = () => {
    this.setState({
      textButton: this.state.currentPageHome ? "VOU VENDER!" : "QUERO COMPRAR!"
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  /*                /* <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer("right", false)}
                > */
  render() {
    return (
      <React.Fragment>
        <StyledHeader>
          <ContainerHeader>
            <StyledLogo src={Logo4used} alt="Logo 4used" />

            <StyledPaper elevation={1}>
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
              <Drawer
                anchor="right"
                open={this.state.right}
                onClose={this.toggleDrawer("right", false)}
              >

                  <Cart products={mockDeCarrinho} />
              </Drawer>
            </div>
          </IconButton>
        </StyledHeader>
        {this.state.currentPageSale && <ContainerCadastro />}
      </React.Fragment>
    );
  }
>>>>>>> Sacolinha card layout; Input e Button do Header;
}

export default Header;
