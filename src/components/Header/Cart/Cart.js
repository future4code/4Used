import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CartCard from "./CartCard";

const StyledSection = styled.section`
  width: 325px;
  display: flex;
  flex-direction: column;
`;

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products
    };
  }
  handleAdd = e => {
    const newProducts = [...this.state.products];
    newProducts[e].qnt++;
    this.setState({ products: newProducts });
  };
  handleRemove = e => {
    const newProducts = [...this.state.products];
    newProducts[e].qnt--;
    if (newProducts[e].qnt === 0) {
      this.handleDelete(e);
    } else {
      this.setState({ products: newProducts });
    }
  };
  handleDelete = e => {
    const newProducts = [...this.state.products];
    newProducts.splice(e, 1);
    this.setState({ products: newProducts });
  };
  render() {
    const cards = this.state.products.map((element, i) => {
      return (
        <CartCard
          product={element}
          key={i}
          callbackId={i}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
          onDelete={this.handleDelete}
        />
      );
    });
    return (
      <StyledSection>
        <Typography variant="h5" align="center" gutterBottom>
          Sacola
        </Typography>
        <Divider light />
		{cards}
		
      </StyledSection>
    );
  }
}
