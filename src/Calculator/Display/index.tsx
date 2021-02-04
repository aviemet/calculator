import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'

import styled from 'styled-components'

const Display: React.FC = () => {
	const { display, calculation } = useSelector((state: RootState) => state.calculator)

	return (
		<DisplayContainer>
			<Calculation>
				{ calculation.join(' ') }
			</Calculation>
			<Value>
				{ display }
			</Value>
		</DisplayContainer>
	)
}

const Calculation = styled.div`
	font-size: 0.8rem;
	padding-bottom: 4px;
`

const Value = styled.div`
	font-size: 1.2rem;
`

const DisplayContainer = styled.div`
	width: 100%;
	text-align: right;
	padding: 0.25rem;
	background-color: #333;
`

export default Display
