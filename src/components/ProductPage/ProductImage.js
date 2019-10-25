import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  max-height: 50vh;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const StyledGrid = styled(Grid)`
  height: 50vh;
`;
export default class ProductImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: this.props.images[0]
    };
  }

  handleImgClick = e => {
    this.setState({
      image: this.props.images[e.target.id]
    });
	};
	
  render() {
			const images = this.props.images.map((image, index) => {
				return (
					<Grid item>
					<StyledImg
						src={image}
						onClick={this.handleImgClick}
						id={index}
					/>
				 </Grid> 
				)
			})
    return (
      <Grid container spacing={8}>
        <Grid item container spacing={8} direction="column" xs={3}>
          {images}
        </Grid>
        <StyledGrid item xs={9}>
          <StyledImg src={this.state.image} />
        </StyledGrid>
      </Grid>
    );
  }
}
