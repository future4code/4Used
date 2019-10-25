/* eslint-disable linebreak-style */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'


const FormWrapper = styled.div`
	display: flex;
	align-items: center;
`
const StyledButton = styled(Button)`
	height: 40px;
`
const StyledForm = styled.form`
	margin: 20px;
`
const StyledTextField = styled(TextField)`
	margin-right: 10px;
`

export class Filters extends React.Component {
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

export default Filters;