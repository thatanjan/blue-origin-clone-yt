import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		max-width: 100vw;
		overflow-x: hidden;
		font-family: 'Barlow', sans-serif;
		color: white;
	}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
)
