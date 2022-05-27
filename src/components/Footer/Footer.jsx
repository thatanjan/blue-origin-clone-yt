import { useState } from 'react'

import featherImg from 'media/icons/featherFooter.svg'

import useMdMediaQuery from 'hooks/useMdMediaQuery'

import Arrow from './Arrow'

import {
	Column,
	Container,
	FeatherImg,
	Text,
	LinksContainer,
	Link,
	LegalContainer,
	SubscribeForm,
	Input,
	InputGroup,
	SubmitBtn,
	PrivacyLinks,
} from './Footer.styles'

const linkList = [
	'careers',
	'gallery',
	'Become an astronaut',
	'Become a supplier',
	'media inqueries',
	'Accessibility',
]

const LegalColumn = () => (
	<Column>
		<LegalContainer>
			<Text>© 2007 - 2022 BLUE ORIGIN, ALL RIGHTS RESERVED.</Text>

			<PrivacyLinks>
				<a href='/'>
					<Text>Privacy Policy</Text>
				</a>
				<a href='/'>
					<Text>Terms of Use</Text>
				</a>
			</PrivacyLinks>
		</LegalContainer>
	</Column>
)

const Footer = () => {
	const [inputVal, setInputVal] = useState('')

	const isMd = useMdMediaQuery()

	const handleSubmit = (e) => {
		e.preventDefault()
		setInputVal('')
	}

	return (
		<Container>
			<Column className='first'>
				<FeatherImg src={featherImg} />

				{isMd && <LegalColumn />}
			</Column>

			<Column>
				<LinksContainer>
					{linkList.map((link) => (
						<Link key={link}>{link}</Link>
					))}
				</LinksContainer>
			</Column>

			<Column form onSubmit={handleSubmit}>
				<SubscribeForm>
					<Text>
						Sign up to receive updates on Blue Origin announcements, launches, and
						opportunities.
					</Text>

					<InputGroup>
						<Input
							value={inputVal}
							onChange={(e) => setInputVal(e.target.value)}
							placeholder='subscribe'
							dfdfdf
						/>

						<SubmitBtn type='submit'>
							<Arrow />
						</SubmitBtn>
					</InputGroup>
				</SubscribeForm>
			</Column>

			{!isMd && <LegalColumn />}
		</Container>
	)
}

export default Footer
