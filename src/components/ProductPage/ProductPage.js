import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import ProductImage from "./ProductImage";
import Button from "@material-ui/core/Button";

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
  render() {
    return (
      <StyledGrid container spacing={0}>
        <Grid item xs={12}>
          BREADCRUMB
        </Grid>
        <Grid item container xs={6}>
          <ProductImage images={mockDeImagem} />
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Nome do Produto
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Descrição super cool, jovem e legal do produto. Estou usando esse
              resto de texto para testar o layou. Oiiiieee sou um texto bem
              loooongo.
            </Typography>
            <Typography variant="h4" gutterBottom>
              R$ 9999,999
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
