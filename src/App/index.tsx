import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from 'store'
import Calculator from '../Calculator/index'

const App: React.FC = () => {
	return (
		<Provider store={ store }>
			<LayoutContainer>
				<Calculator />
			</LayoutContainer>
		</Provider>
	)
}

const LayoutContainer = styled.div`
	width: 100%;
	height: 100%;
	background: #e4a00f;
	display: grid;
`

export default App
