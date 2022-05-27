import styled, { css } from 'styled-components'

const linkUnderline = css`
	&:after {
		background-color: #38f;
		bottom: -1rem;
		content: '';
		display: block;
		height: 0.2rem;
		width: 100%;
		left: 0;
		position: absolute;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.2s;
	}
`

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	transform: translateY(${(props) => (props.displayHeader ? 0 : '-100%')});
	transition: all 0.5s;
	background: ${(props) => (props.displayBG ? '#03d' : 'transparent')};

	${(props) =>
		props.isNavOpen &&
		css`
			overflow-y: auto;
			width: 100%;
			height: 100vh;
		`}
`

export const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	height: 10rem;
`

export const Background = styled.div`
	background: ${(props) => (props.displayBG ? '#03d' : 'transparent')};
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	transition: background 0.5s;
`

export const LogoContainer = styled.div`
	flex-grow: 1;
`

export const Logo = styled.img`
	width: 20rem;
`

export const Navigation = styled.nav``

export const SideNavigation = styled.nav`
	display: grid;
	grid-row-gap: 3rem;
	padding: 5rem;
`

export const NavLink = styled.a`
	text-transform: capitalize;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.23rem;
	position: relative;
	cursor: pointer;

	${linkUnderline}

	&:hover:after {
		transform: scaleX(1);
	}
`

export const HamburgerIcon = styled.img``

export const CloseIcon = styled.img``

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

	background: ${(props) => (props.displayBG ? '#03d' : 'white')};
	border: none;
	padding: 2rem;
	color: ${(props) => (props.displayBG ? 'white' : '#03d')};
	text-transform: uppercase;
	font-weight: 600;
	cursor: pointer;

	& span {
		display: block;
		position: relative;

		${linkUnderline}
	}

	&:hover span:after {
		transform: scaleX(1);
	}
`
