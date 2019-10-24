import React from 'react';
import styled from 'styled-components';
import { CadastroImage } from './CadastroImage';
import { CadastroDados } from './CadastroDados';



const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export class ContainerCadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cadastroImageView: true,
			productsPhotos: [],
		}
	}

	changeUI = () => {
		this.setState({ cadastroImageView: !this.state.cadastroImageView })

	}

	// 	createProduct = (name, description, price, paymentMthod, category, photos, installments) => {
	//     const product = {
	//       name: name,
	//       description: description,
	//       price: price,
	//       paymentMthod: paymentMthod,
	//       category: category,
	//       photos: photos,
	//       installments: installments,
	//     }

	//     axios
	//       .post(
	//         "https://us-central1-missao-newton.cloudfunctions.net/fourUsed/products",
	//         product,
	//       )
	//       .then((response) => {
	//         window.alert("Usuário criado!", response)
	//         window.location.reload()
	//       })
	//       .catch((error) => {
	//         window.alert("Ops, ocorreu um erro. Tente de novo!", error)
	//       })
	//   }

	handleImages = (images) => {
		this.setState({ productsPhotos: images },
			
			() => console.log(this.state.productsPhotos)
			)
		this.changeUI()
	}

	render() {
		const atualUI = this.state.cadastroImageView ? (
			<CadastroImage
				onSend={this.handleImages}
			></CadastroImage>
		) : (
				<CadastroDados



				></CadastroDados>)

		return (
			<MainContainer>
				{atualUI}

			</MainContainer>
		)
	}

} 