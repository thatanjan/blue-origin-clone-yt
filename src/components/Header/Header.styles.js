import styled, { css } from 'styled-components'

const linkUnderLine = css`
	&:after {
		content: '';
		background: #38f;
		height: 0.2rem;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: -1rem;
		display: block;

		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.2s;
	}
`

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	background: ${(props) => (props.displayBG ? '#03d' : 'transparent')};
	transform: translateY(${(props) => (props.displayHeader ? 0 : '-100%')});
	transition: all 0.5s;

	${(props) =>
		props.isNavOpen &&
		css`
			overflow-y: auto;
			width: 100%;
			height: 100vh;
		`};
`

export const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	height: 10rem;
`

export const LogoContainer = styled.div`
	flex-grow: 1;
`

export const Logo = styled.img`
	width: 20rem;
`

export const SideNavigation = styled.nav`
	display: grid;
	grid-row-gap: 3rem;
	padding: 5rem;
`

export const NavLink = styled.a`
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.23rem;
	position: relative;
	cursor: pointer;

	${linkUnderLine}

	&:hover:after {
		transform: scaleX(1);
	}
`

export const NavIconContainer = styled.div`
	& svg {
		fill: white;
		height: 3rem;
		width: 3rem;
		cursor: pointer;
	}
	z-index: 20;
`

export const LanguageIconContainer = styled(NavIconContainer)`
	& svg {
		height: 5rem;
		width: 5rem;
	}
`

export const FlyButton = styled.button`
	@media only screen and (max-width: 900px) {
		display: none;
	}

	color: ${(props) => (props.displayBG ? '#03d' : 'white')};
	background: ${(props) => (props.displayBG ? 'white' : '#03d')};
	border: none;
	padding: 2rem;
	text-transform: uppercase;
	font-weight: 600;
	cursor: pointer;

	& span {
		display: block;
		position: relative;

		${linkUnderLine}
	}

	&:hover span:after {
		transform: scaleX(1);
	}
`

export const HeaderNavigation = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	& > * {
		margin: 0 0.5rem;
	}
`
