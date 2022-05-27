import React from 'react'
import { nanoid } from 'nanoid'

import Header from 'components/Header/Header'
import PageSection from 'components/PageSection/PageSection'
import Social from 'components/Social/Social'
import Footer from 'components/Footer/Footer'

import pageData from './pageData'

const App = () => {
	return (
		<div>
			<Header />

			{pageData.map((data) => (
				<PageSection key={nanoid()} {...data} />
			))}

			<Social />

			<Footer />
		</div>
	)
}

export default App
