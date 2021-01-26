import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'

import styled from 'styled-components'

const Display: React.FC = () => {
	const input = useSelector((state: RootState) => state.calculator.display)

	return (
		<DisplayContainer>
			{ input }
		</DisplayContainer>
	)
}

const DisplayContainer = styled.div`
	width: 100%;
	text-align: right;
	padding: 0.25rem;
	background-color: #333;
`

export default Display
