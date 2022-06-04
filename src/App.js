import React from 'react'
import { nanoid } from 'nanoid'

import PageSection from 'components/PageSection/PageSection'
import Social from 'components/Social/Social'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import pageData from 'pageData'

const App = () => {
	return (
		<div>
			<Header />

			<div>
				{pageData.map((data) => (
					<PageSection {...data} key={nanoid()} />
				))}
			</div>

			<Social />

			<Footer />
		</div>
	)
}

export default App
