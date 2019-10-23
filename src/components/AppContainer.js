import React from 'react'
import {ContainerCadastro} from './CadastroDeProdutos/ContainerCadastro'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<ContainerCadastro></ContainerCadastro>
		</div>
	}
}