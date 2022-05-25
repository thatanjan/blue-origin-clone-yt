import { useState } from 'react'

import featherImg from 'media/icons/featherFooter.svg'

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

const Arrow = (second) => (
	<svg xmlns='http://www.w3.org/2000/svg' className='arrow' viewBox='0 0 16 16'>
		<path
			fill='evenodd'
			d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
		></path>
	</svg>
)

const linkList = [
	'careers',
	'gallery',
	'Become an astronaut',
	'Become a supplier',
	'media inqueries',
	'Accessibility',
]

const Footer = () => {
	const [inputVal, setInputVal] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setInputVal('')
	}

	return (
		<Container>
			<Column className='first'>
				<FeatherImg src={featherImg} />
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
		</Container>
	)
}

export default Footer
