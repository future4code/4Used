import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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

const StyledSection = styled.section`
  width: 320px;
`;
const StyledCardMedia = styled(CardMedia)`
  height: 100px;
  width: 100px;
`;
const StyledCard = styled(CardActionArea)`
  display: flex;
  justify-content: flex-start;
`;
const StyledCardContent = styled(CardContent)`
  flex: "1 0 auto";
`;

export default class Cart extends Component {
  render() {
    return (
      <StyledSection>
        <Typography variant="h5" align="center" gutterBottom>
          Sacola
        </Typography>
        <Divider light />
        <Card>
          <StyledCard>
            <StyledCardMedia
              image={this.props.products[0].img}
              title={this.props.products[0].name}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.products[0].name}
              </Typography>
              <Typography component="p">R$ 70</Typography>
            </StyledCardContent>
          </StyledCard>
          <CardActions>
            <IconButton color="primary">
				<Remove/>
			</IconButton>
			<IconButton  color="primary">
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Delete" color="secondary">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </StyledSection>
    );
  }
}
