import { useState, useEffect } from 'react'

import { ReactComponent as HamIcon } from 'media/icons/ham.svg'
import { ReactComponent as CloseIcon } from 'media/icons/close.svg'
import { ReactComponent as LanguageIcon } from 'media/icons/language.svg'

import useMdMediaQuery from 'hooks/useMdMediaQuery'

import {
	Container,
	InnerContainer,
	Logo,
	LogoContainer,
	NavIconContainer,
	SideNavigation,
	NavLink,
	LanguageIconContainer,
	FlyButton,
	HeaderNavigation,
} from './Header.style'

import logo from 'media/icons/logo.svg'

const navLinks = ['vechiles & engines', 'about blue', 'news', 'careers', 'shop']

const NavigationContainer = ({ Parent, displayBG }) => {
	return (
		<Parent>
			{navLinks.map((item) => (
				<div>
					<NavLink key={item}>{item}</NavLink>
				</div>
			))}

			<LanguageIconContainer>
				<LanguageIcon />
			</LanguageIconContainer>

			<div>
				<FlyButton displayBG={displayBG}>
					<span>Fly to space</span>
				</FlyButton>
			</div>
		</Parent>
	)
}

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [displayBG, setDisplayBG] = useState(false)
	const [displayHeader, setDisplayHeader] = useState(true)

	const isMd = useMdMediaQuery()

	let prevScrollPos = window.pageYOffset

	window.onscroll = () => {
		if (isNavOpen) return false

		const currentScrollPos = window.pageYOffset

		if (currentScrollPos === 0) {
			setDisplayBG(false)
		} else {
			setDisplayBG(true)
		}

		if (currentScrollPos > prevScrollPos) {
			setDisplayHeader(false)
		} else {
			setDisplayHeader(true)
		}

		prevScrollPos = currentScrollPos
	}

	const toggleSideNav = () => {
		document.body.style.overflowY = isNavOpen ? 'visible' : 'hidden'

		setIsNavOpen((p) => !p)
		setDisplayBG(isNavOpen ? false : true)
	}

	useEffect(() => {
		if (isMd) {
			setIsNavOpen(false)
			document.body.style.overflowY = 'visible'
		}
	}, [isMd])

	return (
		<Container
			displayBG={displayBG}
			isNavOpen={isNavOpen}
			displayHeader={displayHeader}
		>
			<InnerContainer>
				<LogoContainer>
					<Logo src={logo} />
				</LogoContainer>

				{isMd && (
					<NavigationContainer displayBG={displayBG} Parent={HeaderNavigation} />
				)}

				{!isMd && (
					<>
						<NavIconContainer>
							{isNavOpen ? (
								<CloseIcon onClick={toggleSideNav} />
							) : (
								<HamIcon onClick={toggleSideNav} />
							)}
						</NavIconContainer>
					</>
				)}
			</InnerContainer>

			{isNavOpen && !isMd && <NavigationContainer Parent={SideNavigation} />}
		</Container>
	)
}

export default Header
