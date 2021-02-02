import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'
import { calculate } from 'lib/calculator'

import styled from 'styled-components'

const History: React.FC = () => {
	const { history } = useSelector((state: RootState) => state.calculator)
	console.log({ history })

	return (
		<HistoryContainer>
			<ul>
				{ history.map(calculation => (
					<li>
						<span>{ calculation.join(' ') } = { calculate(calculation) }</span>
					</li>
				)) }
			</ul>
		</HistoryContainer>
	)
}

const HistoryContainer = styled.div`
	background: #333;
	color: #FFF;
	min-width: 200px;
	overflow: auto;
	margin: 10px 0;
	padding: 0.5rem;

	li span {
		word-wrap: nowrap;
	}
`

export default History
