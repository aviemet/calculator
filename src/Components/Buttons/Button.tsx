import React, { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { keyPress } from 'store/calculatorSlice'
import { KeypressContext } from 'App'
import styled from 'styled-components'

interface ButtonProps {
	value: string | number,
	keypress?: string,
	display?: string,
	rows?: number,
	cols?: number
}

const Button: React.FC<ButtonProps> = ({ value, keypress, display, rows, cols }) => {
	const dispatch = useDispatch()
	const registerKeyListener = useContext(KeypressContext)

	const handleClick = () => {
		dispatch(keyPress(value.toString()))
	}

	useEffect(() => {
		if(keypress) {
			registerKeyListener(keypress, handleClick)
		}
	}, [])

	return (
		<StyledButton
			rows={ rows }
			cols={ cols }
			onClick={ handleClick }
		>{ display ? display : value }</StyledButton>
	)
}

const StyledButton = styled.button<{ rows: number, cols: number }>`
	padding: 0.25rem;
	display: inline-block;
	border: 1px solid #999;
	background: #CCC;
	${({ rows }) => rows && ` grid-row: span ${rows}; `}
	${({ cols }) => cols && ` grid-column: span ${cols}; `}

	&:focus {
		outline: none;
	}

	&:hover {
		background: #AAA;
	}
`

export default Button
