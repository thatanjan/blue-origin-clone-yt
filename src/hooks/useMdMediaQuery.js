import { useState, useEffect } from 'react'

const useMdMediaQuery = () => {
	const [isMd, setIsMd] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 900px)')

		mediaQuery.addListener((e) => setIsMd(e.matches))

		setIsMd(mediaQuery.matches)

		return () => {
			mediaQuery.removeListener(() => setIsMd(false))
		}
	}, [])

	return isMd
}

export default useMdMediaQuery
