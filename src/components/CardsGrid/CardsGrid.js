import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Card from './Card/Card'

const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const MasonryStyled = styled(Masonry)`
  display: -webkit-box;
  display: -ms-flexbox; 
	display: flex;
  margin-left: -30px; 
	width: auto;
	padding-left: 30px;
	background-clip: padding-box;
	background-color: #fcd991;
	flex-grow: 1;
`

const Item = styled.div`
	margin: 20px;
	
`

const breakpointColumnsObj = {
	default: 3,
	1100: 3,
	1024: 2,
	500: 1
};


class CardsGrid extends React.Component {
	constructor(props) {
		super(props)
	}

	handleProductScreenVisibility = (index) => {
		this.props.showProductPage(index);
	}

	render() {
		const data = this.props.products;
		const items = data.map((item, index) => {
			return (
				<Item key={item.index}>
					<Card
						changeScreen={this.handleProductScreenVisibility}
						product={item}
						callbackId={index} 
						/>
				</Item>
			)
		})
		return (

			<GridContainer>
				<MasonryStyled
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid">
					{items}
				</MasonryStyled>
			</GridContainer>

		);
	}
}



export default CardsGrid;