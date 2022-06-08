import styled, { css } from 'styled-components'

import { breakpoints } from 'globalvars'

const noOutline = css`
	&:focus {
		outline: none;
	}
`

export const Container = styled.footer`
	background: #222;
	display: grid;

	${breakpoints.md} {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Column = styled.div`
	padding: 6rem 2rem;
	display: grid;
	place-items: center;
	position: relative;

	&.first:after {
		content: '';
		background: #d8d8d8;
		position: absolute;
		bottom: 0;
		left: auto;
		height: 0.1rem;
		width: 70%;
		opacity: 0.2;
		display: block;

		${breakpoints.md} {
			height: 80%;
			width: 0.1rem;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	&.form {
		background: #2a2a2a;
		padding-left: 5rem;
		padding-right: 5rem;
	}
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
		background: #38f;
		content: '';
		position: absolute;
		height: 0.2rem;
		width: 100%;
		left: 0;
		top: 3rem;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease-in-out;
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
		margin-bottom: 5rem;
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
		fill: #fff;
		width: 2rem;
		height: 2.5rem;
	}
`

export const InputGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 5rem;
	border-bottom: 0.5rem solid #03d;
	align-items: center;
	padding-bottom: 1rem;
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
