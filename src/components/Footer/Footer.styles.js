import styled, { css } from 'styled-components'

const noOutline = css`
	&:focus {
		outline: none;
	}
`

export const Container = styled.footer`
	background: #222;
`

export const Column = styled.div`
	padding: 6rem 0;
	display: grid;
	place-items: center;
	position: relative;

	&.first:after {
		background: #d8d8d8;
		bottom: 0;
		content: '';
		display: block;
		height: 0.1rem;
		left: auto;
		opacity: 0.2;
		position: absolute;
		bottom: 0;
		width: 70%;
	}

	${(props) =>
		props.form &&
		css`
			background: #2a2a2a;
			padding-left: 5rem;
			padding-right: 5rem;
		`}
`

export const FeatherImg = styled.img`
	width: 70%;
`

export const LinksContainer = styled.div`
	display: grid;
	grid-row-gap: 3rem;
	justify-items: center;
`

export const Link = styled.a`
	font-size: 1.6rem;
	text-transform: capitalize;
	letter-spacing: 0.2rem;
	position: relative;
	cursor: pointer;

	&:after {
		background-color: #38f;
		bottom: 0;
		content: '';
		height: 0.2rem;
		left: 0;
		position: absolute;
		top: 3rem;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		width: 100%;
	}

	&:hover:after {
		transform: scaleX(1);
	}
`

export const Text = styled.p`
	font-size: 1.6rem;
	line-height: 2;
`

export const SubscribeForm = styled.form`
	${Text} {
		margin-bottom: 4.8rem;
	}
`

export const Input = styled.input`
	border: none;
	color: #fff;
	background: transparent;
	font-size: 1.8rem;
	font-weight: 600;
	letter-spacing: 0.2rem;

	${noOutline}

	&::placeholder {
		color: #fff;
		text-transform: capitalize;
	}
`

export const SubmitBtn = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;

	${noOutline}

	& .arrow {
		fill: white;
		height: 2.5rem;
		width: 2rem;
		justify-self: center;
	}
`

export const InputGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 5rem;
	border-bottom: 0.5rem solid #03d;
	padding-bottom: 1rem;
	align-items: center;
`

export const LegalContainer = styled.div``

export const PrivacyLinks = styled.div`
	display: flex;
	justify-content: space-between;

	& a {
		color: white;
		text-decoration: none;
	}
`
