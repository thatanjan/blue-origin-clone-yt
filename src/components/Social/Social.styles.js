import styled from 'styled-components'

export const Container = styled.section`
	background: blue;
	display: grid;
	justify-content: center;
	justify-items: center;
	padding: 2rem 0;
	grid-row-gap: 2.5rem;
`

export const FollowText = styled.h3`
	font-size: 2rem;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.2rem;
	text-align: center;
	text-transform: uppercase;
`

export const IconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	list-style: none;
`

export const IconLink = styled.a`
	border: 0.1rem solid transparent;
	border-radius: 50%;
	display: inline-block;
	padding: 1.5rem;
	transition: border 0.3s ease-in-out;
	cursor: pointer;
	margin-right: 1.5rem;

	&:hover {
		border-color: white;
	}
`

export const Icon = styled.img`
	width: 2rem;
	height: 2rem;
`
