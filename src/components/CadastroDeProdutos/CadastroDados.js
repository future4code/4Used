import React from 'react';
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

const CadastroDadosContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const NameAndValue = styled.div `
	width: 40vw;
	display:flex;
	justify-content: space-around;
`

const DescriptionAndCategory = styled.div `
	width: 40vw;
	display:flex;
	justify-content: space-around;
`

const InputName = styled(TextField)`
`

const InputDescription = styled(TextField)`
`

const StyledSelect = styled(Select)`
	width: 200px;
`

const StyledFormControl = styled(FormControl)`
	margin-top: 50px;
`

const SendButton = styled(Button)`
	margin-top: 50px;
`

export class CadastroDados extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			amount: '',
			category: '',
			used: '',
		}
	}

	amountChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	categoryChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	usedChange = event => {
		this.setState({ used: event.target.value });
	};

	render () {
		return (
			<CadastroDadosContainer>
				<h1>Nos fale mais sobre seu produto!</h1>
				<p>
					Tá na hora de vender o peixe! Coloque informações do seu produto. 
					Quanto mais detalhado, mais fácil de vender. 
				</p>
				<NameAndValue>
					<InputName
						label="Nome do produto"
					/>
					<Input
						id="adornment-amount"
						value={this.state.amount}
						onChange={this.amountChange('amount')}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</NameAndValue>
				<DescriptionAndCategory>
					<InputDescription
						label="Descrição do produto"
					/>
					<StyledSelect
						value={this.state.category}
						onChange={this.categoryChange}
					>
						<MenuItem value=""></MenuItem>
						<MenuItem value={'Roupas'}>Roupas</MenuItem>
						<MenuItem value={'Acessórios'}>Acessórios</MenuItem>
						<MenuItem value={'Casa'}>Casa</MenuItem>
						<MenuItem value={'Bugigangas'}>Bugigangas</MenuItem>
					</StyledSelect>
				</DescriptionAndCategory>
				<StyledFormControl component="fieldset">	
					<RadioGroup
						aria-label="position"
						name="position"
						value={this.state.used}
						onChange={this.usedChange}
						row
					>
						<FormControlLabel
							value='usado'
							control={<Radio color="primary" />}
							label="Usado"
							labelPlacement="usado"
						/>
						<FormControlLabel
							value='naoUsado'
							control={<Radio color="primary" />}
							label="Nunca Usado"
							labelPlacement="naoUsado"
						/>
					</RadioGroup>
				</StyledFormControl>
				<SendButton
					variant="contained" 
					color="secondary" 
				>
					Enviar
				</SendButton>				
			</CadastroDadosContainer>
		)
	}

} 