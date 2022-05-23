import React from 'react'
import { nanoid } from 'nanoid'

import PageSection from 'components/PageSection/PageSection'

import pageData from './pageData'

const App = () => {
	return (
		<div>
			{pageData.map((data) => (
				<PageSection key={nanoid()} {...data} />
			))}
		</div>
	)
}

export default App
