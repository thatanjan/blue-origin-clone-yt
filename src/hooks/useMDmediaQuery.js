import { useState, useEffect } from 'react'

const useMDmediaQuery = () => {
	const [isMD, setIsMD] = useState(false)

	useEffect(() => {
		const value = '(min-width: 900px)'

		const mediaqQuery = window.matchMedia(value)

		setIsMD(mediaqQuery.matches)

		mediaqQuery.addListener((e) => setIsMD(e.matches))

		return () => {
			mediaqQuery.removeListener((e) => setIsMD(e.matches))
		}
	}, [])

	return isMD
}

export default useMDmediaQuery
