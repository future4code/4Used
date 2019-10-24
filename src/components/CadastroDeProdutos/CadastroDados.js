import React from 'react';
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const CadastroDadosContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
`
const NameAndValue = styled.div`
	width: 40vw;
	display:flex;
	justify-content: space-around;
`
const DescriptionAndCategory = styled.div`
	width: 40vw;
	display:flex;
	justify-content: space-around;
`
const InputName = styled(TextField)`
`
const InputDescription = styled(TextField)`
	
`
const StyledSelect = styled(Select)`
	width: 300px;
`
const SendButton = styled(Button)`
	margin-top: 50px;
`

export function CadastroDados(props){
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
						value={props.nameProduct}
						onChange={props.onChangeNameProduct}
					/>
					<Input
						type="number"
						id="adornment-price"
						value={props.priceProduct}
						onChange={props.onChangePriceProduct}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</NameAndValue>
				<DescriptionAndCategory>
					<InputDescription
						label="Descrição do produto"
						value={props.descriptionProduct}
						onChange={props.onChangeDescripitonProduct}
					/>
					<StyledSelect
						value={props.category}
						onChange={props.onChangeCategoryProduct}
						startAdornment={<InputAdornment position="start">Categoria</InputAdornment>}
					>
						<MenuItem value=""></MenuItem>
						<MenuItem value={'Roupas'}>Roupas</MenuItem>
						<MenuItem value={'Acessórios'}>Acessórios</MenuItem>
						<MenuItem value={'Casa'}>Casa</MenuItem>
						<MenuItem value={'Bugigangas'}>Bugigangas</MenuItem>
					</StyledSelect>
				</DescriptionAndCategory>

				<StyledSelect
					value={props.paymentMethod}
					onChange={props.onChangePaymentMethod}
					startAdornment={<InputAdornment position="start">Forma de Pagamento</InputAdornment>}
				>
					<MenuItem value="" label="Forma de pagamento"></MenuItem>
					<MenuItem value={'Card'}>Cartão de Crédito</MenuItem>
					<MenuItem value={'Cash'}>Boleto Bancário</MenuItem>
				</StyledSelect>

				<Input
					type="number"
					id="adornment-installments"
					value={props.installments}
					onChange={props.onChangeInstallments}
					startAdornment={<InputAdornment position="start">Parcelas</InputAdornment>}
				/>

				<SendButton
					variant="contained"
					color="secondary"
					onClick={props.onCLickSendButton}
				>
					Enviar
				</SendButton>
			</CadastroDadosContainer>
		)
}

