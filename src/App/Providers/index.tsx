import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import Keylistener from './KeyListener'

const Providers: React.FC = ({ children }) => {
	return (
		<Keylistener>
			<Provider store={ store }>
				{ children }
			</Provider>
		</Keylistener>
	)
}

export default Providers
