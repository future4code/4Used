import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledCardMedia = styled(CardMedia)`
  height: 100px;
  width: 100px;
`;
const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  justify-content: flex-start;
`;
const StyledCardContent = styled(CardContent)`
  flex: "1 0 auto";
`;
const StyledCardActions = styled(CardActions)`
  display: flex;
`;
const StyledIconButton = styled(IconButton)`
  margin-left: auto;
`;

export default class CartCard extends Component {
  handleAdd = () => {
    this.props.onAdd(this.props.callbackId);
  };
  handleRemove = () => {
    this.props.onRemove(this.props.callbackId);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.callbackId);
  };
  render() {
    return (
      <Card>
        <StyledCardActionArea>
          <StyledCardMedia
            image={this.props.product.img}
            title={this.props.product.name}
          />
          <StyledCardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {this.props.product.name}
            </Typography>
            <Typography component="p">
              R$ {this.props.product.price * this.props.product.qnt}
            </Typography>
          </StyledCardContent>
        </StyledCardActionArea>
        <StyledCardActions>
          <IconButton color="primary" onClick={this.handleRemove}>
            <Remove />
          </IconButton>
          <Typography variant="subtitle2">{this.props.product.qnt}</Typography>
          <IconButton color="primary" onClick={this.handleAdd}>
            <AddIcon />
          </IconButton>
          <StyledIconButton
            aria-label="Delete"
            color="secondary"
            onClick={this.handleDelete}
          >
            <DeleteIcon />
          </StyledIconButton>
        </StyledCardActions>
      </Card>
    );
  }
}
