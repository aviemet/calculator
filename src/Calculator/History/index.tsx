import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'
import ReduxCalculator from 'lib/ReduxCalculator'

import styled from 'styled-components'

const History: React.FC = () => {
	const { history } = useSelector((state: RootState) => state.calculator)
	console.log({ history })

	return (
		<HistoryContainer>
			<ul>
				{ [...history].reverse().map((calculation, i) => (
					<li key={ i }>
						<div>{ calculation.join(' ') }</div>
						<div>= { ReduxCalculator.calculate(calculation) }</div>
					</li>
				)) }
			</ul>
		</HistoryContainer>
	)
}

const HistoryContainer = styled.div`
	background: #555;
	color: #FFF;
	width: 220px;
	overflow: hidden;
	margin: 10px 0;
	position: relative;
	border-radius: 0 5px 5px 0;

	ul{
		height: 100%;
		padding: 0.5rem;
		overflow-y: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		li {
			text-align: right;
			border-radius: 3px;
			background: #666;
			padding: 1px 5px;
			margin-bottom: 5px;
			border-bottom: 2px solid #9e906f;
		}
	}
`

export default History
