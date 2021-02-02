import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import Providers from 'App/Providers'


const AllTheProviders: React.FC = ({ children }) => {
	return (
		<Providers>
			{children}
		</Providers>
	)
}

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }