import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Logo4used from './4used.png'
import InstagramLogo from './instagram-new.png'
import FacebookLogo from './facebook.png'
import TwitterLogo from './twitter.png'


const StyledFooter = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	
	background-color: #FBF3EE;
	display: flex;
	justify-content: center;
	align-items: center;
`
const FooterContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const StyledLogo = styled.img`
	width: 80px;
`
const StyledSocialMedia = styled.img`
	width: 60px;
	transition: all .2s ease-in-out;

	&:hover{ 
		transform: scale(1.1);
	}
`

function Footer(props) {
	return (
		<StyledFooter>
			<FooterContainer>
				<StyledLogo src={Logo4used} />
				<span>&copy;4used Todos os direitos reservados.</span>
				<div>
					<a href="https://www.instagram.com/4used_/" target="blank"><StyledSocialMedia src={InstagramLogo} /></a>
					<a href="https://facebook.com" target="blank"><StyledSocialMedia src={FacebookLogo} /></a>
					<a href="https://twitter.com" target="blank"><StyledSocialMedia src={TwitterLogo} /></a>
				</div>
			</FooterContainer>
		</StyledFooter>
	)
}

export default Footer;