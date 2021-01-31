import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { pressOperator } from 'store/calculatorSlice'
import styled from 'styled-components'

interface OperatorProps {
	value: string,
	display?: string,
	rows?: number,
	cols?: number
}

const Operator: React.FC<OperatorProps> = ({ value, display, rows, cols }) => {
	const dispatch = useDispatch()

	const handleClick = e => {
		dispatch(pressOperator(value))
	}

	return (
		<OperatorButton
			rows={ rows }
			cols={ cols }
			onClick={ handleClick }
		>
			{ display ? display : value }
		</OperatorButton>
	)
}

const OperatorButton = styled(Button)`
	background-color: #f1af58;
`

export default Operator
