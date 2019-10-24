/* eslint-disable linebreak-style */
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

const StyledCardMedia = styled(CardMedia)`
	height: 150px;
	width: 250px;
	margin-left: 10px;
`
const StyledCard = styled(Card)`
	width: 300px;
`

export class Cards extends React.Component {
	
	render() {

		return (

			<StyledCard>
				<CardHeader
					title="Nome do Produto"
					subheader="Categoria"
				/>
				<StyledCardMedia
					image="https://i.imgur.com/j4ENEUC.jpg"
					title="Nome do Produto"
				/>
				<CardContent>
					<Typography component="p">
						This impressive paella is a perfect party dish and a fun meal to cook together with your
						guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
					<Typography component="p">
						Mais info.
					</Typography>
				</CardContent>
				<CardActions disableActionSpacing>
					<IconButton>
						<Button variant="contained" color="secondary">
							Adicionar ao carrinho
						</Button>
					</IconButton>
				</CardActions>
			</StyledCard>
		)
	}
}

