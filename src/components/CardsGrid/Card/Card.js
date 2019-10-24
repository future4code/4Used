import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import 'typeface-roboto'


const StyledCard = styled(Card)`
	display: grid;
	justify-items: center;
	margin-top: 20px;
`
const StyledCardMedia = styled(CardMedia)`
	height: 250px;
	width: 200px;
	margin-top: 20px;
`

const ButtonStyled = styled(Button) `
	background-color: #d97c4d;
	&&:hover {
		background: #43434f;
		opacity: 0.8;
	}
	&&:ripple {
		display: none;
	}
`

const CardHeaderStyled = styled(CardHeader)`
	font-family: 'Roboto';
	font-size: 16px;
	color: #43434f;
	font-weight: bold;
	opacity: 0.8;
	display: grid;

`


class Cards extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (

			<StyledCard>
				<StyledCardMedia
					image={this.props.product.photos[0]}
					title='camisa'
				/>
				<CardHeaderStyled 
					disableTypography
					title={this.props.product.name}
					// subheader={this.props.product.category}
				/>
				<CardActions disableActionSpacing>
					<ButtonStyled 
					variant="contained" color="secondary"
					>
					Quero!
					</ButtonStyled>
				</CardActions>
			</StyledCard>
		)
	}
}

export default Cards;