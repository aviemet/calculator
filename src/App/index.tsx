import React from 'react'
import styled from 'styled-components'
import Providers from './Providers'
import Calculator from '../Calculator/index'

const App: React.FC = () => (
	<Providers>
		<LayoutContainer>
			<Calculator />
		</LayoutContainer>
	</Providers>
)

const LayoutContainer = styled.div`
	width: 100%;
	height: 100%;
	background: #e4a00f;
	display: grid;
`

export default App
