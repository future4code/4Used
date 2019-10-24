import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Card from './Card/Card'

const GridContainer = styled.div`
	max-width: 80vw;
	margin: auto;
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

const data = [
	{
		img: 'https://images.unsplash.com/photo-1568473883595-41ad577b1850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		name: 'Suéter Lorem',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1569008476073-bcfd2b600a2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		name: 'Yeezy sneakers',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1567399399763-1554c6eb5fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		name: 'Óculos Gatinha',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		name: 'Sobretudo glamour',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1567081085077-bc3bc329eb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
		name: 'Chemise birds',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1567719337802-d7634b41711f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
		name: 'Camisa floral',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1567102095092-fa07e38f66b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
		name: 'Fanny pack is back',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1568518100067-6c3822b9f30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
		name: 'Back to the 70s',
		price: 70,
		category: 'Roupas'
	},
	{
		img: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		name: 'Gabrielle',
		price: 70,
		category: 'Roupas'
	}
];

class CardsGrid extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const items = data.map((item) => {
			return <Item key={item.index}>
				<Card product={item}/>
			</Item>
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