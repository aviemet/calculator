import React from 'react'
import { render, screen } from 'test/test-utils'
import Button from 'Components/Buttons/Button'

describe('<Button />', () => {
	it('renders with valid props', () => {
		render(<Button value="1" keypress="1" rows={ 2 } cols={ 3 } />)

		expect(screen.getByRole('button')).toHaveAttribute('rows', '2')
		expect(screen.getByRole('button')).toHaveAttribute('cols', '3')
		expect(screen.getByText('1')).toBeInTheDocument()
	})
})
