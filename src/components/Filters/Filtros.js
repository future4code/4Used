/* eslint-disable linebreak-style */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'




const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
})

const FormWrapper = styled.div`
	display: flex;
	align-items: center;
`
const StyledButton = styled(Button)`
	height: 50px;
`
const StyledForm = styled.form`
	margin: 20px;
`
const StyledTextField = styled(TextField)`
	margin-right: 10px;
`


export class Filtros extends React.Component {
	state = {
	};



	render() {

		return (

			<FormWrapper>

				<StyledForm>
					<StyledTextField
						label="Valor Mínimo"
						margin="normal"
					/>

					<StyledTextField
						label="Valor Máximo"
						margin="normal"
					/>

				</StyledForm>

				<StyledButton variant="contained" color="primary">
					Pesquisar!
				</StyledButton>

			</FormWrapper>
		)
	}
}



export default withStyles(styles)(Filtros)