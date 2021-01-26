import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { pressValue } from 'store/calculatorSlice'

interface ValueProps {
	value: string | number,
	display?: string,
	rows?: number,
	cols?: number
}

const Value: React.FC<ValueProps> = ({ value, display, rows, cols }) => {
	const dispatch = useDispatch()

	const handleClick = e => {
		dispatch(pressValue(value))
	}

	return (
		<Button
			rows={ rows }
			cols={ cols }
			onClick={ handleClick }
		>{ display ? display : value }</Button>
	)
}

export default Value
