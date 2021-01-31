import React, { useEffect, useContext } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { pressValue } from 'store/calculatorSlice'
import { KeypressContext } from 'App'

export interface ValueProps {
	value: string | number,
	key?: string,
	display?: string,
	rows?: number,
	cols?: number
}

const Value: React.FC<ValueProps> = ({ value, key, display, rows, cols }) => {
	const dispatch = useDispatch()
	const registerKeyListener = useContext(KeypressContext)

	const handleClick = () => {
		dispatch(pressValue(value))
	}

	useEffect(() => {
		registerKeyListener(key || value.toString(), handleClick)
	}, [])

	return (
		<Button
			rows={ rows }
			cols={ cols }
			onClick={ handleClick }
		>{ display ? display : value }</Button>
	)
}

export default Value
