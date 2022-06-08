import styled, { css } from 'styled-components'

import { breakpoints } from 'globalvars'

export const SectionContainer = styled.section`
	width: 100vw;
	height: 100vh;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}
`

export const BackgroundImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
`

export const ContentContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 10%;
	z-index: 5;
	transform: translateY(-50%);
	width: 80%;
	max-width: 100rem;
	text-transform: uppercase;

	${(props) =>
		props.centeredText &&
		css`
			text-align: center;
			left: 50%;
			transform: translate(-50%, -50%);
		`}
`

export const Title = styled.h2`
	font-size: 5.6rem;
	font-family: 'Rajdhani', sans-serif;
	font-weight: 300;
	line-height: 1.2;
	margin: 2rem 0;

	& b {
		font-weight: 700;
		display: block;
	}

	${breakpoints.sm} {
		font-size: 7rem;
	}
`

export const Subtitle = styled.p`
	font-size: 2rem;
	letter-spacing: 0.1rem;
	margin-bottom: 2rem;
	text-transform: none;

	${breakpoints.sm} {
		font-size: 3rem;
	}
`

export const Button = styled.a`
	display: inline-block;
	margin: 2rem 0;
	font-size: 1.6rem;
	font-weight: 700;
	border: 0.2rem solid #ffffffbd;
	padding: 1.5rem 5.5rem;
	cursor: pointer;
	transition: border-color 0.2s ease-in-out;

	&:hover {
		border-color: white;
	}
`

export const Tag = styled.div`
	display: inline-block;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: 0.2rem;
	padding-left: 4rem;
	positon: relative;

	&:before {
		background-color: #03d;
		content: '';
		display: block;
		height: 0.5rem;
		width: 2.5rem;
		position: absolute;
		top: 0.5rem;
		left: 0;
	}
`
