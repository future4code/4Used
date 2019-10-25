import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import ProductImage from "./ProductImage";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import BackArrow from '@material-ui/icons/ArrowBackRounded';

const StyledGrid = styled(Grid)``;
const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1.2rem;
`;

const mockDeImagem = [
  {
    url: "https://picsum.photos/800/600"
  },
  {
    url: "https://picsum.photos/800/600"
  },
  {
    url: "https://picsum.photos/800/1000"
  }
];


export default class ProductPage extends Component {


	onClickArrow = () => {
		this.props.backToMain();
	}
	
  render() {
    return (
      <StyledGrid container spacing={0}>
        <Grid item xs={12}>
          <IconButton>
						<BackArrow onClick={this.onClickArrow}/>
					</IconButton>
        </Grid>
        <Grid item container xs={6}>
          <ProductImage images={this.props.product.photos} />
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {this.props.product.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {this.props.product.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
							R$ {this.props.product.price}
            </Typography>
						<Typography variant="h4" gutterBottom>
						  {this.props.product.installments}
            </Typography>
            <Grid item xs={6}>
              <StyledButton variant="contained" color="secondary" size="large">
                COMPRAR
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    );
  }
}
