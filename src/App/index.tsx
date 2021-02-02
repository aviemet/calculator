import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from 'store'
import Calculator from '../Calculator/index'

const keypressMap: Record<string, () => void> = {}
export const KeypressContext = React.createContext<(key: string, func: () => void) => void>(undefined)

const App: React.FC = () => {
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
				<LayoutContainer>
					<Calculator />
				</LayoutContainer>
			</Provider>
		</KeypressContext.Provider>
	)
}

const LayoutContainer = styled.div`
	width: 100%;
	height: 100%;
	background: #e4a00f;
	display: grid;
`

export default App
