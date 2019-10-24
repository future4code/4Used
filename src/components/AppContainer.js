import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		)
	}
}