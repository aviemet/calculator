import Display from './Display'
import Keys from './Keys'
import History from './History'

import styled from 'styled-components'

const Calculator: React.FC = () => {
	return (
		<Centered>
			<Bevel>
				<Display />
				<Keys />
			</Bevel>
			<History />
		</Centered>
	)
}

const Centered = styled.div`
	margin: auto;
	display: flex;
`

const Bevel = styled.div`
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
	border-radius: 5px;
	background-color: #111;
	color: #FFF;
	padding: 1rem;
`

export default Calculator