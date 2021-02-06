import { Basic, Scientific, Programmer } from './Layouts'

import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState, MODES } from 'store'

const Keys: React.FC = () => {
	const { mode } = useSelector((state: RootState) => state.settings)

	let KeyLayout: React.FC
	switch(mode) {
		case MODES.SCIENTIFIC:
			KeyLayout = Scientific
			break
		case MODES.PROGRAMMER:
			KeyLayout = Programmer
			break
		case MODES.BASIC:
		default:
			KeyLayout = Basic
			break		
	}

	return (
		<KeysContainer>
			<KeyLayout />
		</KeysContainer>
	)
}

const KeysContainer = styled.div`
	width: 100%;
`

export default Keys
