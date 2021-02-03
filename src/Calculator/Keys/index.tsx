import { Basic, Scientific } from './Layouts'

import styled from 'styled-components'

const Keys: React.FC = () => {
	return (
		<KeysContainer>
			<Basic />
		</KeysContainer>
	)
}

const KeysContainer = styled.div`
	width: 100%;
`

export default Keys
