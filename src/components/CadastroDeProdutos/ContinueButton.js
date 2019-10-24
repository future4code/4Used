import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button) `
	margin-top: 50px;
`


export function ContinueButton(props) {
	return (
		<div>
			<StyledButton 
				variant="contained" 
				color="secondary" 
				onClick={props.onClickContinueButton}
				
				>
					Continuar
			</StyledButton>
		</div>
	)
}
