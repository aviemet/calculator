import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from 'store'

const keypressMap: Record<string, () => void> = {}
export const KeypressContext = React.createContext<(key: string, func: () => void) => void>(undefined)

const Providers: React.FC = ({ children }) => {
	useEffect(() => {
		document.addEventListener('keydown', e => {
			console.log({ key: e.key })
			if(keypressMap[e.key]) {
				keypressMap[e.key]()
			}
		})
	}, [])

	const registerKeyListener = (key: string, func: () => void) => {
		keypressMap[key] = func
	}

	return (
		<KeypressContext.Provider value={ registerKeyListener }>
			<Provider store={ store }>
				{ children }
			</Provider>
		</KeypressContext.Provider>
	)
}

export default Providers
