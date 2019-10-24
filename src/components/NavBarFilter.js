/* eslint-disable linebreak-style */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import { Filtros } from './components/Filtros'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	)
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired,
};

const NomeLojaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const NomeLoja = styled.h1`
	color: gray;
	margin: 10px 0 0;
	font-size: 42px;
`
const SubtituloLoja = styled.p`
	font-style: italic;
	color: gray;
`
const StyledButton = styled(Button)`
	margin: 50px;
`
const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500]
		},
		secondary: {
			main: '#0044ff',
		},
	},
})


export class NavBarFilter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0,
			controle: true,
		}
	}

	handleChange = (event, value) => {
		this.setState({ value })
	};

	changeButtonTxt = () => {
		const controle = this.state.controle
		controle === true ? this.setState({ controle: false }) : this.setState({ controle: true })
		console.log(this.state.controle)
	}



	render() {

		const controle = this.state.controle
		const textoBtn = (
			controle ? 'Preços decrescente' : 'Preços crescentes'
		)

		const { value } = this.state

		return (

			<Paper>
				<NomeLojaWrapper>
					<NomeLoja>4Used</NomeLoja>
					<SubtituloLoja>Autonomia para se expressar conforme a sua vontade</SubtituloLoja>
				</NomeLojaWrapper>

				<Tabs
					value={value}
					onChange={this.handleChange}
					centered
				>
					<Tab label="Início" />
					<Tab label="Roupas" />
					<Tab label="Acessórios" />
					<Tab label="Bugigangas" />

					<StyledButton onClick={this.changeButtonTxt} theme={theme}>
						<Button variant="contained" color="secondary">
							{textoBtn}
						</Button>
					</StyledButton>

				</Tabs>

				{value === 1 && <Filtros />}
				{value === 2 && <Filtros />}
				{value === 3 && <Filtros />}

			</Paper>

		)
	}
}

export default NavBarFilter