import React, { useState, useEffect } from 'react'

import { ReactComponent as HamIcon } from 'media/icons/ham.svg'
import { ReactComponent as CloseIcon } from 'media/icons/close.svg'
import { ReactComponent as LanguageIcon } from 'media/icons/language.svg'

import logo from 'media/icons/logo.svg'

import useMDmediaQuery from 'hooks/useMDmediaQuery'

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
} from './Header.styles'

const navLinks = ['vechiles & engines', 'about blue', 'news', 'careers', 'shop']

const NavigationContainer = ({ Parent, displayBG }) => (
	<Parent>
		{navLinks.map((item) => (
			<div key={item}>
				<NavLink>{item}</NavLink>
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

const Header = () => {
	const isMD = useMDmediaQuery()

	const [isNavOpen, setIsNavOpen] = useState(false)
	const [displayBG, setDisplayBG] = useState(false)
	const [displayHeader, setDisplayHeader] = useState(true)

	useEffect(() => {
		if (isMD) {
			setIsNavOpen(false)
			document.body.style.overflowY = 'visible'
		}
	}, [isMD])

	const toggleNav = () => {
		document.body.style.overflowY = isNavOpen ? 'visible' : 'hidden'

		setIsNavOpen(!isNavOpen)
		setDisplayBG(isNavOpen ? false : true)
	}

	let prevScrollPos = window.pageYOffset

	window.onscroll = () => {
		if (isNavOpen) return false

		const currentScrollPos = window.pageYOffset

		setDisplayBG(currentScrollPos > 0)

		if (currentScrollPos > prevScrollPos) {
			setDisplayHeader(false)
		} else {
			setDisplayHeader(true)
		}

		prevScrollPos = currentScrollPos
	}

	return (
		<Container
			displayHeader={displayHeader}
			isNavOpen={isNavOpen}
			displayBG={displayBG}
		>
			<InnerContainer>
				<LogoContainer>
					<Logo src={logo} />
				</LogoContainer>

				{isMD && (
					<NavigationContainer Parent={HeaderNavigation} displayBG={displayBG} />
				)}

				{!isMD && (
					<NavIconContainer>
						{isNavOpen ? (
							<CloseIcon onClick={toggleNav} />
						) : (
							<HamIcon onClick={toggleNav} />
						)}
					</NavIconContainer>
				)}
			</InnerContainer>

			{isNavOpen && <NavigationContainer Parent={SideNavigation} />}
		</Container>
	)
}

export default Header
