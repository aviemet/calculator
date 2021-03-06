import React, { useEffect } from 'react'

const removeFirstMatch = (match: string, arr: string[]) => {
	const i = arr.indexOf(match)
	if(i >= 0) {
		arr.splice(i, 1)
	}
}

interface IKeypressProvider {
	registerKeyListener: (key: string, func: () => void) => void,
	unregisterKeyListener: (key: string) => void
}

export const KeypressContext = React.createContext<IKeypressProvider>(undefined)

const modifierKeysPressed: string[] = []
const keypressMap: Record<string, () => void> = {}

const KeyListener: React.FC = ({ children }) => {
	const modifierKeys = ['Alt','Control','Meta']

	useEffect(() => {
		document.addEventListener('keydown', e => {
			// Disable standard keypress events if a modifier key is being pressed
			if(modifierKeys.includes(e.key)) {
				modifierKeysPressed.push(e.key)
			}

			if(modifierKeysPressed.length === 0 && keypressMap[e.key]) {
				keypressMap[e.key]()
			}
		})

		document.addEventListener('keyup', e => {
			if(modifierKeysPressed.includes(e.key)) {
				removeFirstMatch(e.key, modifierKeysPressed)
			}
		})
	}, [])

	const registerKeyListener = (key: string, func: () => void) => {
		keypressMap[key] = func
	}

	const unregisterKeyListener = (key: string) => {
		delete keypressMap[key]
	}

	return (
		<KeypressContext.Provider value={ { registerKeyListener, unregisterKeyListener } }>
			{ children }
		</KeypressContext.Provider>
	)
}

export default KeyListener
