import React from 'react'
import { nanoid } from 'nanoid'

import {
	Container,
	FollowText,
	IconsContainer,
	IconLink,
	Icon,
} from './Social.styles'

import instagram from 'media/icons/social/instagram.svg'
import linkedin from 'media/icons/social/linkedin.svg'
import twitter from 'media/icons/social/twitter.svg'
import youtube from 'media/icons/social/youtube.svg'

const icons = [instagram, linkedin, twitter, youtube]

const Social = () => {
	return (
		<Container>
			<FollowText>Follow blue origin</FollowText>

			<IconsContainer>
				{icons.map((icon, index) => (
					<IconLink key={nanoid()}>
						<Icon src={icon} />
					</IconLink>
				))}
			</IconsContainer>
		</Container>
	)
}

export default Social
